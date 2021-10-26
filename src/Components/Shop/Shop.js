import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { addDb } from '../../utilities/localdb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Search from '../Search/Search';
import "./Shop.css"

const Shop = () => {
    const [products] = useProducts();
    const [displayProduct, setDisplayProduct] = useState([]);
    const [cart, setCart] = useCart();
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const size = 10;

    // console.log(page);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setDisplayProduct(data.products);
                const count = data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            });
    }, [page]);


    const handelAddToCart = (product) => {
        if (cart.indexOf(product) === -1) {
            const newCart = [...cart, product]
            setCart(newCart);
        } else {
            product.quantity += 1;
            cart[cart.indexOf(product)] = product;
            const newCart = [...cart]
            setCart(newCart);
        }

        // save product in localStorage   
        addDb(product.key)
    }
    // console.log(cart);

    // search handler 
    const searchHandle = (event) => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProduct(matchedProducts);
        console.log(matchedProducts.length);
    }

    return (
        <>
            <Search searchHandle={searchHandle}></Search>
            <div className="shop">
                <div className="product-container">
                    {
                        displayProduct.map(product => <Product key={product.key} product={product} handelAddToCart={handelAddToCart}></Product>)
                    }
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                className={number === page ? 'selected' : ' '}
                                key={number}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                        }
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
        </>

    );
};

export default Shop;