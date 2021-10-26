import { useState, useEffect } from "react";
import { getStoredCart } from "../utilities/localdb";

const useCart = () => {
    const [cart, setCart] = useState([])

    const savedCart = getStoredCart();
    const keys = Object.keys(savedCart);
    // console.log(keys)
    useEffect(() => {

        fetch('http://localhost:5000/products/byKeys', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(keys)
        }).then(res => res.json())
            .then(products => {
                // console.log(products)
                   const saveCart = getStoredCart();
                  if (products.length) {
                      let selectedProducts = []
  
                      for (const key in saveCart) {
  
                          const selectedProduct = products.find(product => key === product.key);
                          if (selectedProduct) {
                              // set quantity 
                              selectedProduct.quantity = saveCart[key];
                              selectedProducts.push(selectedProduct);
                          }
  
                      }
                      // set to cart
                      setCart(selectedProducts)
                  }
            })




    }, []);


    return [cart, setCart]

}

export default useCart;
