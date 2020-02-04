import React from 'react';
import './OrderItem.css';

const OrderItem = (props) => {
    const {orderItem, products} = props;
    const {articleImage, articleName, Quantity, Size, Color, Price} = orderItem;
    
    return (
        <article className="OrderItem">
            <div className="orderImage">
                {orderItem.articleImage && products ? <img src={require('../../images/products/'+articleImage)} alt="" width="100" />:null}
            </div>
            <div className="orderDetails">
                <p>Produktnamn: <span>{articleName}</span></p>
                <p>Storlek: {Size}</p>
                <p>Färg: {Color}</p>
                <p>Antal: {Quantity}</p>
                <p>Pris: {Price * Quantity}kr</p>
            </div>
        </article>
    )
}

export default OrderItem;