import React from 'react';
import './CartWidget.css';


const CartWidget = (props) => {
    return (
        <section className="cartView">
            <div className="orderItems">
                <h5>Produkter:</h5>
                <p>Pryl 1</p>
            </div>
            <div className="orderFormContainer">
                <p>Formulär</p>
            </div>
        </section>
    );
}

export default CartWidget;