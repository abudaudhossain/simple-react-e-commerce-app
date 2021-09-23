import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    let totalPrice = 0;
    for (const product of props.cart) {
        totalPrice += product.price;
    }
    const totalShipping = props.cart.reduce((previous, product) => previous + product.shipping, 0);
    const totalBeforTax = totalPrice + totalShipping;
    const totalTax = totalBeforTax * 0.1;
    const totalOrdeePrice = totalBeforTax + totalTax;
    return (
        <div className = 'cart'>
            <div className="title">
                <h3>Order Summary</h3>
                <h5>Items ordered: {props.cart.length}</h5>
            </div>
            <div className="cart-body">
                <p >Items: <span>${totalPrice.toFixed(2)}</span></p>
                <p>Shippong & Handling: <span>${totalShipping.toFixed(2)}</span></p>
                <p>Total Before Tax: <span>${totalBeforTax.toFixed(2)}</span></p>
                <p>Esitmated Tax: <span>${totalTax.toFixed(2)}</span></p>
                <h4>Order Total: <span>${totalOrdeePrice.toFixed(2)}</span></h4>
                <button className="regular-btn">Review your order</button>
            </div>

        </div>
    );
};

export default Cart;