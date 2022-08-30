import React, {useEffect, useState} from 'react';
import { MdShoppingCart } from "react-icons/md";
import { Popup } from '..';

import "./nav.css";

const Nav = (props) => {
  const { cart, onAddItemToCart, onUpdateQuantityOnCart, onIncreaseQuantity, onDecreaseQuantity } = props;
  const [showPopup, setShowPopup] = useState(false);
  
  /* get the summary using reduce callback */
  let total = cart.reduce((total, item) => { 
    return total + item.quantity;
  }, 0);

  // console.log(cart);
  const onShowCart = (boolean) => {
    setShowPopup(boolean);
  }

  return (
      <div className='nav'>
      <h2>ReactMeals</h2>      
      <button className='btn-cart' onClick={onShowCart}>
        <MdShoppingCart style={{ fontSize: "1.25rem" }} />
        <p>Your cart</p><p className='quantity'>{total ? total : 0}</p>
      </button>
      <Popup cart={cart} onAddItemToCart={onAddItemToCart} onUpdateQuantityOnCart={onUpdateQuantityOnCart} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} onClickShow={showPopup} onShowCart={onShowCart} />
    </div>
  )
}

export default Nav;