import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

// components
import { HomePage } from "./pages/HomePage";
import { CartContext, useCartContext } from "./context/CartContext/cartContext";
import Nav from "./components/Navigation";
import Checkout from "./pages/Checkout";

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  const onAddItemToCart = (item, amount) => {
    const itemIdx = cart.findIndex((elm) => elm.id === item.id);
    if (itemIdx === -1) {
      item.quantity = amount;
      const added = [...cart, item];
      setCart(added);
    } else {
      cart[itemIdx].quantity += amount;
      setCart([...cart]);
    }
  };

  const onUpdateQuantityOnCart = (item, amount) => {
    // console.log({ item, amount });
    const itemIdx = cart.findIndex((elm) => elm.id === item.id);
    cart[itemIdx].quantity = amount;
    setCart([...cart]);
  };

  const onIncreaseQuantity = (id) => {
    const itemIdx = cart.findIndex((elm) => elm.id === id);
    cart[itemIdx].quantity++;
    setCart([...cart]);
  };

  const onDecreaseQuantity = (id) => {
    const itemIdx = cart.findIndex((elm) => elm.id === id);
    cart[itemIdx].quantity--;
    setCart([...cart]);
    if (cart[itemIdx].quantity === 0) { 
      cart.splice(itemIdx,1);
      setCart([...cart]);
    }    
  };

  const onDeleteItem = (id) => {
    const itemIdx = cart.findIndex((elm) => elm.id === id);
    cart.splice(itemIdx, 1);
    setCart([...cart]);
  }

  const totalPriceList = cart.map((item) => item.quantity * item.price);
 
  const getTotalPrice = (arr) => {
    if (arr.length > 0) {
      const totalAmount = totalPriceList.reduce((sum, price) => {
        return sum + price;
      }, 0);
      setTotalPrice(totalAmount);
    }
  };

  console.log(totalPrice);

  return (
    <CartContext.Provider value={{cart, totalPrice, onAddItemToCart,onUpdateQuantityOnCart, onIncreaseQuantity, onDecreaseQuantity, onDecreaseQuantity, getTotalPrice}}>
      <BrowserRouter>
        <Nav
          cart={cart}
          totalPrice={totalPrice}
          onAddItemToCart={onAddItemToCart}
          getTotalPrice={getTotalPrice}
          onUpdateQuantityOnCart={onUpdateQuantityOnCart}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          onDeleteItem={onDeleteItem}
        />
        <Routes>
          <Route
            path="/"
            // element={<HomePage cart={cart} onAddItemToCart={onAddItemToCart} />}
            element={<HomePage />}
          ></Route>
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                totalPrice={totalPrice}
                onUpdateQuantityOnCart={onUpdateQuantityOnCart}
                onIncreaseQuantity={onIncreaseQuantity}
                onDecreaseQuantity={onDecreaseQuantity}
                onDeleteItem={onDeleteItem}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    
  );
};

export default App;
