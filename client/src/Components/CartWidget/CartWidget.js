import React, {useState, useEffect} from 'react';
import './CartWidget.css';
import OrderItem from '../OrderItem/OrderItem';

const CartWidget = (props) => {
    const {customer, products, updateCustomer} = props;
    const [order, setOrder] = useState({});
    const [totalCost, setTotalCost] = useState(0);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        const calcPrice = () => {
            let totalPrice = 0;
            if(customer) {
                customer.cart.forEach(item => totalPrice += item.Price * item.Quantity);
            }
            setTotalCost(totalPrice);
        }
        calcPrice();
    },[customer])

    const placeOrder = (e) => {
        e.preventDefault();
        console.log('Placing order...');
        let updatedCustomer = {...customer};
        updatedCustomer.Name = e.target.cName.value;
        updatedCustomer.Email = e.target.cEmail.value.toLowerCase();
        updatedCustomer.Address = e.target.cAddress.value;
        updatedCustomer.ZipCode = e.target.cZip.value;
        updatedCustomer.City = e.target.cCity.value;
        updateCustomer(updatedCustomer);
        const {Name, Email, Address, ZipCode, City} = updatedCustomer;
        order.customer = {Name:Name, Email:Email, Address:Address, ZipCode:ZipCode, City:City};
        order.orderLineItems = customer ? customer.cart.map(item => {return {ProductId: item.ProductId, Quantity:item.Quantity, Color:item.Color, Size: item.Size, Price:item.Price}}):null;
        order.totalCost = totalCost;
        console.log(JSON.stringify(order));
        try {
            fetch('https://localhost:5001/Admin/order', {
                method: 'POST',
                mode: 'cors',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(order),
            }).then(res => {
                if(res.ok) {
                    setSuccess(true);
                    updatedCustomer.cart = [];
                    updateCustomer(updatedCustomer);
                    localStorage.setItem('localCustomer', JSON.stringify(updatedCustomer));
                    
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="cartView">
            <div className="orderItems">
                <h5>Produkter:</h5>
                {
                    customer ? Object.values(customer.cart)
                        .map(item => <OrderItem 
                        key={`${item.articleName} ${item.color} ${item.size}`} 
                        orderItem={item} 
                        products={products} updateCustomer={updateCustomer} />) : null
                }
                <h5>Totalpris på ordern: {totalCost ? totalCost : 0} kr</h5>
            </div>

            <div className="orderFormContainer">
                <form onSubmit={placeOrder}>
                    <label>Fullt namn: </label>
                    <input type="text" name="cName" id="cName" placeholder="John Doe"/>
                    <label>Epostadress: </label>
                    <input type="email" name="cEmail" id="cEmail" placeholder="exempel@email.se"/>
                    <label>Adress: </label>
                    <input type="text" name="cAddress" id="cAddress" placeholder="Syltgatan 31" />
                    <label>Postnummer: </label>
                    <input type="text" name="cZip" id="cZip" placeholder="12345" />
                    <label>Postort: </label>
                    <input type="text" name="cCity" id="cCity" placeholder="Exempelstad" />
                    <input type="submit" value="Lägg ordern!"/>
                </form>
            </div>
        </section>
    );
}

export default CartWidget;