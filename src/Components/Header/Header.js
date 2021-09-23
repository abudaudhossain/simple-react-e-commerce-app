import React from 'react';
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo img" />
            <nav>
                <ul>
                    <li><a href="/home">Shop</a></li>
                    <li><a href="/Order">Order Review</a></li>
                    <li><a href="/product">Manage Inentory here</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;