import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { HomePage } from "./pages/HomePage";
import Nav from "./components/Navigation";
import Checkout from "./pages/Checkout";

const App = () => {
  const [cart, setCart] = useState([]);
  // const [quantity, setQuantity] = useState(0);

  const onAddItemToCart = (item, amount) => {
    // console.log({ item, amount });
    const itemIdx = cart.findIndex((elm) => elm.id === item.id);
    if (itemIdx === -1) {
      item.quantity = amount;
      const added = [...cart, item];
      setCart(added);
    }
    else {
      // console.log({ item });
      cart[itemIdx].quantity += amount;
      // console.log(cart[itemIdx].quantity);
      setCart([...cart]);
    }
  }  

  const onUpdateQuantityOnCart = (item, amount) => { 
    // console.log({ item, amount });
    const itemIdx = cart.findIndex((elm) => elm.id === item.id);
    cart[itemIdx].quantity = amount;
    setCart([...cart]);
  }

  const onIncreaseQuantity = (id) => { 
    const itemIdx = cart.findIndex((elm) => elm.id === id);
    cart[itemIdx].quantity ++;
    setCart([...cart]);
  }

  const onDecreaseQuantity = (id) => {
    const itemIdx = cart.findIndex((elm) => elm.id === id);
    cart[itemIdx].quantity--;
    setCart([...cart]);
  }

  return (
    <BrowserRouter>
      <Nav cart={cart} onAddItemToCart={onAddItemToCart} onUpdateQuantityOnCart={onUpdateQuantityOnCart} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} />
      <Routes>
        <Route path="/" element={<HomePage cart={cart} onAddItemToCart={onAddItemToCart} />}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;