import React, { useState, useEffect } from 'react';
import './ProductPage.css';




const ProductPage = (props) => {
    const {customer, updateCustomer} = props;
    const [product, setProduct] = useState({});
    const {id, articleName, image, description, price } = product;

    const [Size, setSize] = useState();
    const [Color, setColor] = useState();
    const [Quantity, setQuantity] = useState(1);

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

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleSizeChange = (e) => {
        setSize(e.target.value);

    }
    const submit = (e) => {
        e.preventDefault();
        let orderItem = {id:id, quantity:Quantity, color:Color, size:Size, price:price};
        let newcustomer = {...customer};
        newcustomer.cart.push(orderItem);
        updateCustomer(newcustomer);
    }

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
                            <option value="Rosa">Rosa</option>
                            <option value="Blå">Blå</option>
                        </select>
                    </label>

                    <label>
                        Storlek:
                        <select name="size" id="size" onChange={handleSizeChange}>
                            <option value="">Välj Storlek</option>
                            <option value="Stor">Stor</option>
                            <option value="Liten">Liten</option>
                        </select>    
                    </label>

                    <label>
                        Antal: <input type="number" name="" id="" onChange={(e) => setQuantity(e.target.value)} defaultValue={Quantity} min="1"/>
                    </label>
                    
                    <p>{price*Quantity} kr</p>

                    <button>Lägg till i varukorg</button>
                </form>

            </div>
        </article>
    );
}

export default ProductPage;