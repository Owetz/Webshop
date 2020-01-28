import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            try {
                await fetch('https://localhost:5001/products').then(res => res.json()).then(res => setProducts(res));
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[]);

    useEffect(() => {
        console.log(products);
    });

    return (
        <section className="productList">
            {products.map(product => <Product key={product.id} product={product} />)}
        </section>
    );
}

export default Products;