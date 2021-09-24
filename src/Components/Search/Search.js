import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Search.css"

const Search = (props) => {
    return (
        <div className= "search-area">
            <input onChange = {props.searchHendelar} type="text" name="" id="" placeholder ="Search Products..."/><FontAwesomeIcon icon={faShoppingCart} />
        </div>
    );
};

export default Search;