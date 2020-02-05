import React, {useState} from 'react';
import './Order.css';
import OrderItem from '../OrderItem/OrderItem';

const Order = (props) => {
    const {customer, id, totalCost, orderLineItems} = props.order;
    return (
        <article className="orderCard">
                <p>Ordernummer: {id}</p>
                <p>Kund: {customer.name}</p>
                <p>Epost: {customer.email}</p>
                <p>Adress: {`${customer.address}, ${customer.zipCode}, ${customer.city}`}</p>
                <div>
                {orderLineItems.map(product => {
                    return <OrderItem key={`${product.articleName} ${product.color} ${product.size}`} orderProduct={product} />
                })}
                </div>
                <p>Totalkostnad: {totalCost} kr</p>
        </article>
    )
}

export default Order;