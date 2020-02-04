import React, {useState} from 'react';
import './Order.css';
import OrderItem from '../OrderItem/OrderItem';

const Order = (props) => {
    const {customer, id, totalCost, orderLineItems} = props.order;
    return (
        <article className="orderCard">
                <p>Ordernummer: {id}</p>
                <p>Kund: {customer.name}</p>
                {
                    orderLineItems.map(item => <OrderItem 
                            key={`${item.articleName} ${item.color} ${item.size}`} 
                            orderItem={item} 
                            />)
                }
                <p>Totalkostnad: {totalCost} kr</p>
        </article>
    )
}

export default Order;