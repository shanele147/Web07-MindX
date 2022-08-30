import React from "react";
import { Link } from "react-router-dom";
import "./CheckOut.css";
import { MdArrowRightAlt } from "react-icons/md";
import CheckoutForm from "../../components/CheckoutForm";

const Checkout = (props) => {
  const {
    cart,
    totalPrice,
    onUpdateQuantityOnCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
  } = props;

  /* onChange quantity*/
  const onHandleChange = (e, item) => {
    props.onUpdateQuantityOnCart(item, Number(e.target.value));
  };


  const cartItem = cart.map((item) => {
    const { id, name, description, price, image, quantity } = item;
    return (
      <>
        <li key={id}>
          <div>
            <div className="checkout-img">
              <img src={image}></img>
            </div>
            <div className="item-info">
              <p>{name}</p>
              <p>{description}</p>
            </div>
            <p style={{fontWeight: "bold", color: "#c96211" }}>{(price * quantity).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              currencyDisplay: "symbol",
            })}</p>
            
          </div>
          
          <div className="cart-info-container">
            <div className="cart-btn">
              <button
                onClick={() => {
                  onDecreaseQuantity(id);
                }}
              >
                -
              </button>
            <label htmlFor="amount" id={id}>
              <input
                type="text"
                className="amount"
                name={id}
                onChange={(e) => onHandleChange(e, item)}
                  value={quantity !== 0 ? quantity : ""}
                min="0"
              ></input>
            </label>            
              <button
                onClick={() => {
                  onIncreaseQuantity(id);
                }}
              >
                +
              </button>
            </div>
          </div>
        </li>
      </>
    );
  });
  return (
    <div className="container checkout-page">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 checkout-list">
          <Link to="/">
            <MdArrowRightAlt />
            <span>Continue shopping</span>
          </Link>
          <div className="checkout-info">
            <h6>Shopping cart</h6>
            <p>You have {cart.length} items on shopping cart</p>
          </div>

          <ul className="list-item">{cartItem}</ul>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 form-container">
          <div>
            <CheckoutForm totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
