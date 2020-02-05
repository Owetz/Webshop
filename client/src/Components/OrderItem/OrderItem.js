import React from 'react';
import './OrderItem.css';

const OrderItem = (props) => {
    const {orderItem, products, orderProduct} = props;
    if(orderItem) {
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
    if(orderProduct) {
        console.log('orderProduct:');
        console.log(orderProduct);
        const {quantity, price, color, size, product} = orderProduct;
        const {articleName, image} = product;
        return(
            <article className="OrderItem">
                <div className="orderImage">
                    {image ? <img src={require('../../images/products/'+image)} alt="" width="100" />:null}
                </div>
                <div className="orderDetails">
                    <p>Produktnamn: <span>{articleName}</span></p>
                    <p>Storlek: {size}</p>
                    <p>Färg: {color}</p>
                    <p>Antal: {quantity}</p>
                    <p>Pris: {price * quantity}kr</p>
                </div>
            </article>
        )
    }
}

export default OrderItem;