import React, {useState} from 'react';
import './CartWidget.css';
import OrderItem from '../OrderItem/OrderItem';

const placeOrder = (e) => {
    e.preventDefault();
    console.log('Placing order...');
}


const CartWidget = (props) => {
    const {customer, products, setCustomer} = props;
    const [order, setOrder] = useState();
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
                    <label>Ditt namn:</label><input type="text" name="" id="" placeholder="John Doe"/>
                    <label>Epostadress:</label><input type="email" name="" id="" placeholder="exempel@email.se"/>

                    <input type="submit" value="Lägg ordern!"/>
                </form>
            </div>
        </section>
    );
}

export default CartWidget;