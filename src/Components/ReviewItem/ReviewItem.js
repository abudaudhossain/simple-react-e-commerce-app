import React from 'react';

const ReviewItem = (props) => {
    const { name, seller, price, quantity, key } = props.product
    return (
        <div>
            <h3 className="product-name">{name}</h3>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <p>Quantity: {quantity}</p>

            <button onClick={() => props.handelRemoveItem(key)} className="regular-btn">Remove Item</button>
        </div>
    );
};

export default ReviewItem;