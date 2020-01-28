import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Product.css';

const Product = (props) => {
    const {id, articleName, image, price, description} = props.product;


    return(
        <article className="productCard">
            <Link to={'/products/'+id}><img className="productImage" src={require('../../images/products/'+image)} alt={description} /></Link>
            <Link to={'/products/'+id} className="productName">{articleName}</Link>
            <p>{price} kr</p>
        </article>
    )
}

export default Product;