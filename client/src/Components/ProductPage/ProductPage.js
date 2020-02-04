import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import { noAuto } from '@fortawesome/fontawesome-svg-core';




const ProductPage = (props) => {
    const {customer, updateCustomer, Colors, Sizes} = props;
    
    const [product, setProduct] = useState({});
    const {id, articleName, image, description, price } = product;
    const [Size, setSize] = useState();
    const [Color, setColor] = useState();
    const [Quantity, setQuantity] = useState(1);
    const [valid, setValid] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                await fetch('https://localhost:5001'+window.location.pathname).then(res => res.json()).then(res => setProduct(res));
            } catch (e) {
                console.log(e);
            }
        }
        fetchProduct();
    }, [])

    

    useEffect(() => {
        setValid(checkValidity());
    },[Color,Size,Quantity]);

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }
    
    const submit = (e) => {
        e.preventDefault();
        let newcustomer = {...customer};
        if(newcustomer.cart.length > 0) {
            Object.values(newcustomer.cart).forEach((item, index) => {
                if(item.ProductId === id && item.Color === Color && item.Size === Size) {
                    newcustomer.cart[index].Quantity = parseInt(newcustomer.cart[index].Quantity) + Quantity;
                } else {
                    let orderItem = {articleName:articleName, articleImage:image, ProductId:id, Quantity:Quantity, Color:Color, Size:Size, Price:price};
                    newcustomer.cart.push(orderItem);
                }
            });
        } else {
            let orderItem = {articleName:articleName, articleImage:image, ProductId:id, Quantity:Quantity, Color:Color, Size:Size, Price:price};
            newcustomer.cart.push(orderItem);
        }
        updateCustomer(newcustomer);
    }

    const checkValidity = () => {
        return Quantity > 0 ? Color !== undefined ? Size !== undefined ? true: false : false: false;
    };

   

    return (
        <article className="productView">
            {image ?
                <img className="productImage" src={require('../../images/products/' + image)} alt={description} /> :
                <img src={require('../../images/products/placeholder.png')} alt={description} />}
            <div className="productInformation">
                <h1>{articleName}</h1>
                <p>{description}</p>
                <form onSubmit={submit}>
                    <label>
                        Färg: 
                        <select name="color" id="color" onChange={handleColorChange}>
                            <option value="">Välj Färg</option>
                            {
                                Colors ? Colors.map(item => <option key={item.id} value={item.colorName}>{item.colorName}</option>) : null
                            }
                        </select>
                    </label>

                    <label>
                        Storlek:
                        <select name="size" id="size" onChange={handleSizeChange}>
                            <option value="">Välj Storlek</option>
                            {
                                Sizes ? Sizes.map(item => <option key={item.id} value={item.sizeName}>{item.sizeName}</option>): null
                            }
                        </select>    
                    </label>

                    <label>
                        Antal: <input type="number" name="quantity" id="quantity" onChange={(e) => setQuantity(e.target.value)} defaultValue={Quantity} min="1"/>
                    </label>
                    
                    <p>{price*Quantity} kr</p>

                    <button disabled={!valid}>Lägg till i varukorg</button>
                </form>

            </div>
        </article>
    );
}

export default ProductPage;