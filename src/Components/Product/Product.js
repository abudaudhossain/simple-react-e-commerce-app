import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
  
    // console.log(props.product);
    const { name, img, price, seller, stock, star } = props.product
    return (
        <div className="product">
            <div className="img-container">
                <img src={img} alt="product-img" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                   emptySymbol ='far fa-star'
                   fullSymbol = 'fa fa-star'
                /> <br/>
                <button onClick={() => props.handelAddToCart(props.product)} className="regular-btn"> <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;