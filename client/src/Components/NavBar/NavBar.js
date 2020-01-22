import React from 'react';
import './NavBar.css';
import {
    Link
  } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/">Origami Webshop</Link>
            </div>
            <div className="actions">
                <Link to="/account">Account</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    );
}

export default NavBar;