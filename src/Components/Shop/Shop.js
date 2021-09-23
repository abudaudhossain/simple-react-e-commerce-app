import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const handelAddtoCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
        
    }
    // console.log(cart);

    return (
        <div className = "shop">
            <div className="product-container">
                {
                    products.map(product => <Product key = {product.key} product = {product} handelAddtoCart = {handelAddtoCart}></Product>)
                }
            </div>
            <div className="product-cart">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;