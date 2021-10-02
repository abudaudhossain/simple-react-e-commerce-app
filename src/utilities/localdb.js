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

const updateDb = cart => {
    localStorage.setItem('product_cart', JSON.stringify(cart));
  }
const removeFromDb = id => {
    const exists = getCart('product_cart');
    if (!exists) {
  
    }
    else {
      const shopping_cart = JSON.parse(exists);
      delete shopping_cart[id];
      updateDb(shopping_cart);
    }
  }

  const clearCart = () =>{
      localStorage.removeItem('product_cart');
  }

export { addDb, getStoredCart , removeFromDb, clearCart}