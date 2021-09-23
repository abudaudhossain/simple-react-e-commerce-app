import React from 'react';

const Cart = (props) => {
    let totalPrice = 0;
    for(const product of props.cart){
        totalPrice += product.price;
    }
 
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items ordered: {props.cart.length}</h5>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;