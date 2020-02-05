import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const NavBar = (props) => {
    const {cart} = props;
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={require('../../images/logo.png')} className="logo"/> Origami</Link>
            </div>
            <div className="actions">
                <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} color="#232931" /><span className="cartAmount">({cart?cart.length:0})</span></Link>
            </div>
        </nav>
    );
}

export default NavBar;