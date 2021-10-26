import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import {removeFromDb } from '../../utilities/localdb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    // const [products] = useProducts();
    const [cart, setCart] = useCart();
    const history = useHistory();

    const handelRemoveItem = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);

        removeFromDb(key);
    }
    const handlePlaceOrder= () =>{
        history.push('/shipping');
    }
    return (
        <div className="shop">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key = {product.key}
                         product = {product}
                         handelRemoveItem = {handelRemoveItem}
                         ></ReviewItem>)
                }
            </div>
            <div className="product-cart">
                <Cart cart={cart}>
                <button onClick ={handlePlaceOrder} className="regular-btn">Shipping Now</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;