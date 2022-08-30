import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Popup } from "..";

import "./nav.css";

const Nav = (props) => {
  const {
    cart,
    totalPrice,
    onAddItemToCart,
    getTotalPrice,
    onUpdateQuantityOnCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
  } = props;
  const [showPopup, setShowPopup] = useState(false);

  /* get the summary using reduce callback */
  let total = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalPriceList = cart.map((item) => item.quantity * item.price);
  // console.log(totalPriceList);
  /* console.log(
    totalPriceList.reduce((sum, price) => {
      return sum + price;
    }, 0)
  ); */

  // update the total Amount when the item in cart updated
  useEffect(() => {
    getTotalPrice(cart);
  }, [total]);

  const onShowCart = (boolean) => {
    setShowPopup(boolean);
  };

  return (
    <div className="nav">
      <Link to="/" className="logo">
        <h2>ReactMeals</h2>
      </Link>
      <button className="btn-cart" onClick={onShowCart}>
        <MdShoppingCart style={{ fontSize: "1.25rem" }} />
        <p>Your cart</p>
        <p className="quantity">{total ? total : 0}</p>
      </button>
      <Popup
        cart={cart}
        totalPrice={totalPrice}
        onAddItemToCart={onAddItemToCart}
        onUpdateQuantityOnCart={onUpdateQuantityOnCart}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
        onClickShow={showPopup}
        onShowCart={onShowCart}
      />
    </div>
  );
};

export default Nav;
