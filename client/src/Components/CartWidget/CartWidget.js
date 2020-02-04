import React, {useState, useEffect} from 'react';
import './CartWidget.css';
import OrderItem from '../OrderItem/OrderItem';

const CartWidget = (props) => {
    const {customer, products, setCustomer, Colors, Sizes} = props;
    const [order, setOrder] = useState({});
    const calcPrice = () => {
        let totalPrice = 0;
        if(customer) {
            customer.cart.forEach(item => totalPrice += item.Price * item.Quantity);
        }
        return totalPrice;
    }
    const placeOrder = (e) => {
        e.preventDefault();
        console.log('Placing order...');
        let updatedCustomer = {...customer};
        updatedCustomer.Name = e.target.cName.value;
        updatedCustomer.Email = e.target.cEmail.value.toLowerCase();
        updatedCustomer.Address = e.target.cAddress.value;
        updatedCustomer.ZipCode = e.target.cZip.value;
        updatedCustomer.City = e.target.cCity.value;
        setCustomer(updatedCustomer);
        const {Name, Email, Address, ZipCode, City} = updatedCustomer;
        order.customer = {Name:Name, Email:Email, Address:Address, ZipCode:ZipCode, City:City};
        order.orderLineItems = customer ? customer.cart.map(item => {return {ProductId: item.ProductId, Quantity:item.Quantity, Color:item.Color, Size: item.Size, Price:item.Price}}):null;
        order.TotalPrice = calcPrice();
        console.log(JSON.stringify(order));
        try {
            fetch('https://localhost:5001/Admin/order', {
                method: 'POST',
                mode: 'cors',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(order),
            }).then(res => console.log(res));
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
                        products={products} setCustomer={setCustomer} />) : null
                }
            </div>

            <div className="orderFormContainer">
                <form onSubmit={placeOrder}>
                    <label>Ditt namn: <input type="text" name="cName" id="cName" placeholder="John Doe"/></label>
                    <label>Epostadress: <input type="email" name="cEmail" id="cEmail" placeholder="exempel@email.se"/></label>
                    <label>Adress: <input type="text" name="cAddress" id="cAddress" placeholder="Syltgatan 31" /></label>
                    <label>Postnummer: <input type="text" name="cZip" id="cZip" placeholder="19534" /></label>
                    <label>Postort: <input type="text" name="cCity" id="cCity" placeholder="Märsta" /></label>
                    <input type="submit" value="Lägg ordern!"/>
                </form>
            </div>
        </section>
    );
}

export default CartWidget;