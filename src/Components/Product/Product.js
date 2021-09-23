import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log();
    const {name, img, price, seller,stock} = props.product
    return (
        <div className = "product">
           <div className = "img-container">
               <img src={img} alt="product-img" />
           </div>
           <div>
               <h3 className = "product-name">{name}</h3>
               <p><small>by: {seller}</small></p>
               <p>${price}</p>
               <p><small>only {stock} left in stock - order soon</small></p>
               <button onClick = {() =>props.handelAddtoCart(props.product)} className="regular-btn">Add to Cart</button>
           </div>
        </div>
    );
};

export default Product;