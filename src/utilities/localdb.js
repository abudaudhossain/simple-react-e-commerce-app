// storage data in local db 
const addDb = (productKey) => {
    const exists = getCart("product_cart");
    let shoppingProduct = {}

    if (!exists) {
        shoppingProduct[productKey] = 1;
    } else {
        shoppingProduct = JSON.parse(exists);
        if (shoppingProduct[productKey]) {
            shoppingProduct[productKey] += 1;
        } else {
            shoppingProduct[productKey] = 1;
        }
    }

    localStorage.setItem("product_cart", JSON.stringify(shoppingProduct))

}

const getStoredCart = () =>{
    const exists = getCart("product_cart");
    return exists ? JSON.parse(exists): {};
}

const getCart = (keyName) => {
    return localStorage.getItem(keyName);
}


export { addDb, getStoredCart }