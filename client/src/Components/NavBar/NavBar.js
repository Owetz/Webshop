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
                <Link to="/">Origami Webshop</Link>
            </div>
            <div className="actions">
                {/*<Link to="/account">{isLoggedIn ? 'Min Sida':'Logga In'}</Link>*/}
                <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/><span className="cartAmount">({cart?cart.length:0})</span></Link>
            </div>
        </nav>
    );
}

export default NavBar;