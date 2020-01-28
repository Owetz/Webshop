import React, {useState} from 'react';
import './Order.css';
import { Link } from "react-router-dom";

const Order = (props) => {
    const {customer, id, totalCost} = props.order;
    return (
        <article className="orderCard">
            <Link to={'/admin/' + id}>
                <p>Ordernummer: {id}</p>
                <p>Kund: {customer}</p>
                <p>Totalkostnad: {totalCost} kr</p>
            </Link>
        </article>
    )
}

export default Order;