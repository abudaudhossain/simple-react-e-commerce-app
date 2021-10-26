import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import { useForm } from "react-hook-form";
import "./shipping.css"
import { clearCart, getStoredCart } from '../../utilities/localdb';
import useAuth from '../../hooks/useAuth';
const axios = require('axios');

const Shipping = () => {
    const [cart, setCart] = useCart();
    const { register, handleSubmit, reset } = useForm();
    const orderProducts = getStoredCart();
    const history = useHistory();
    const {user} = useAuth();

    // console.log(user.uid);

    const onSubmit = data => {
        data.products = orderProducts;
        data.userId = user.uid;
        // console.log(data);
        axios.post('http://localhost:5000/order', data)
        .then(res =>{
            if(res.data.acknowledged){
                alert('Your Order Success');
                clearCart();
                reset();
                setCart([]);
                history.push('/shop');
            }
        })
    };

    return (
        <div className="shop">
            <div className="product-container">
                <h1>Please Added Shipping Address</h1>
                <div className="shipping">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", {required: true})} value={user.displayName || ''}/>
                    <input {...register("email", {required: true})} value = {user.email || ''}/>
                    <input {...register("country", {required: true})} placeholder="Country Name"/>
                    <input {...register("address", {required: true})} placeholder="Address"/>
                    <input type="number" {...register("phone", {required: true})} placeholder="Phone Number"/>
                    <input style={{background: '#e7bb4a'}} type="submit" value="Order Places"/>
                </form>
                </div>
            </div>
            <div className="product-cart">
                <Cart cart={cart}>
                    <Link to='/Order'>
                        <button className="regular-btn">Review your order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shipping;