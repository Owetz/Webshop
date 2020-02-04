import React from 'react';
import './OrderItem.css';

const OrderItem = (props) => {
    const {orderItem, products} = props;
    const {articleImage, articleName, Quantity, Size, Color, Price} = orderItem;
    
    return (
        <article className="OrderItem">
            {orderItem.articleImage && products ? <img src={require('../../images/products/'+articleImage)} alt="" width="100" />:null}
            <p>Produktnamn: <span>{articleName}</span></p>
            <p>Storlek: {Size}</p>
            <p>Färg: {Color}</p>
            <p>Antal: {Quantity}</p>
            <p>Pris: {Price * Quantity} kr</p>
        </article>
    )
}

export default OrderItem;