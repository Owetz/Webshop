import React from 'react';
import './OrderItem.css';

const OrderItem = (props) => {
    const {orderItem, products} = props;
    const {articleName, quantity, size, color, price} = orderItem;
    console.log(articleName);
    console.log(orderItem);
    console.log(products);
    
    return (
        <article className="OrderItem">
            {orderItem && products ? <img src={require('../../images/products/pig.jpg')} alt="" width="100" />:null}
            <p>Produktnamn: <span>{articleName}</span></p>
            <p>Storlek: {size}</p>
            <p>Färg: {color}</p>
            <p>Antal: {quantity}</p>
            <p>Totalkostnad: {price * quantity} kr</p>
        </article>
    )
}

export default OrderItem;