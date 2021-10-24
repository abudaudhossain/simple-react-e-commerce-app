import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    const {user, singOut} = useAuth();
    return (
        <div className="header">
            <img src={logo} alt="logo img" />
            <nav>
                <ul>
                    <li><NavLink  className="navlink" to ="/shop">Shop</NavLink></li>
                    <li><NavLink  className="navlink" to ="/Order">Order Review</NavLink></li>
                    <li><NavLink  className="navlink" to ="/inventory">Manage Inventory here</NavLink></li>
                    {
                        user.email ?<button onClick ={singOut}>Log Out</button>

                        :<li><NavLink  className="navlink" to ="/login">Login</NavLink></li>
                    }
                    
                </ul>
            </nav>            
        </div>
    );
};

export default Header;