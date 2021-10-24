import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addDb, getStoredCart } from '../../utilities/localdb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Search from '../Search/Search';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProduct(data);
            });
    }, []);

    useEffect(() => {
        // load data in localStorage 
        const seveCart = getStoredCart();
        if (products.length) {
            let selectedProudts = []

            for (const key in seveCart) {

                const selectedProduct = products.find(product => key === product.key);
                if (selectedProduct) {
                    // set quantity 
                    selectedProduct.quantity = seveCart[key];
                    selectedProudts.push(selectedProduct);
                }

            }
            // set to cart
            setCart(selectedProudts)
        }


    }, [products])

    const handelAddtoCart = (product) => {
        if (cart.indexOf(product) === -1) {
            const newCart = [...cart, product]
            setCart(newCart);
        } else {
            product.quantity += 1;
            cart[cart.indexOf(product)] = product;
            const newCart = [...cart]
            setCart(newCart);
        }

        // seve product in localStorage   
        addDb(product.key)
    }
    // console.log(cart);
    // search headler 
    const searchHeander = (event) => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProduct(matchedProducts);
        console.log(matchedProducts.length);
    }

    return (
        <>
            <Search searchHendelar={searchHeander}></Search>
            <div className="shop">
                <div className="product-container">
                    {
                        displayProduct.map(product => <Product key={product.key} product={product} handelAddtoCart={handelAddtoCart}></Product>)
                    }
                </div>
                <div className="product-cart">
                    <Cart cart={cart}>
                       <Link to='/Order'>
                       <button className="regular-btn">Review your order</button>
                       </Link>
                    </Cart>
                </div>
            </div>
        </>

    );
};

export default Shop;