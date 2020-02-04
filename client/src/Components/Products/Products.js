import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = (props) => {
    const {products} = props;
    return (
        <section className="productList">
            {Object.values(products).map(product => <Product key={product.id} product={product} />)}
        </section>
    );
}

export default Products;