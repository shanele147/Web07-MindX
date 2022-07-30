import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import "./nav.css";

const Nav = () => {
  return (
      <div className='nav'>
      <h2>ReactMeals</h2>      
      <button className='btn-cart'><MdShoppingCart style={{fontSize: "1.25rem"}} /><p>Your cart</p><p className='quantity'>0</p></button>
    </div>
  )
}

export default Nav;