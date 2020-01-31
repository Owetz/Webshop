import React from 'react';
import './CartWidget.css';
import OrderItem from '../OrderItem/OrderItem';


const CartWidget = (props) => {
    const {customer, products, setCustomer} = props;
    return (
        <section className="cartView">
            <div className="orderItems">
                <h5>Produkter:</h5>
                {customer ? Object.values(customer.cart).map(item => <OrderItem key={`${item.articleName} ${item.color} ${item.size}`} orderItem={item} products={products} />) : null}
            </div>
            <div className="orderFormContainer">
                <form>
                    
                </form>
            </div>
        </section>
    );
}

export default CartWidget;