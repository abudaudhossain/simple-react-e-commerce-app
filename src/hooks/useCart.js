import {useState, useEffect} from "react";
import {getStoredCart} from "../utilities/localdb";

const useCart = products =>{
    const [cart, setCart] = useState([])

    useEffect( () =>{
        const savedCart = getStoredCart();
        
        const selectCart = [];

        for(const key in savedCart){
 
            const addCartItem = products.find(product => product.key === key);

            // set quantity 
            if(addCartItem){
                const quantity = savedCart[key];
                addCartItem.quantity = quantity;
                selectCart.push(addCartItem);
            }
            
        }
        setCart(selectCart);
    },[products]);
    
    
    return [cart, setCart]

}

export default useCart;