import React from 'react';
import { useNavigate } from "react-router-dom";

const CheckoutForm = (props) => {
    const navigate = useNavigate();
    const { totalPrice } = props;

    /* back to homepage */
    const onBackHome = () => {
        navigate("/");
    }
    /* onChange input form*/
    const onHandleInputForm = (e) => {
        console.log(e.target.value);
    };

    const onSubmit = () => {

    }
  return (
      <>
          <form id="customer-info">
              <label htmlFor="name">Your name<input type="text" name="name" onChange={onHandleInputForm} placeholder="Your name" /></label>
              <label htmlFor="street">Street<input type="text" name="street" onChange={onHandleInputForm} placeholder="Street" /></label>
              <label htmlFor="postal">Postal code<input type="text" name="postal" onChange={onHandleInputForm} placeholder="700000" /></label>
              <label htmlFor="city">City<input type="text" name="city" onChange={onHandleInputForm} placeholder="Ho Chi Minh" /></label>
              <div style={{ padding: "2rem 0 0.5rem" }}>
                  <h5>Total amount: {totalPrice === 0 ? 0 :
                      (totalPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          currencyDisplay: "symbol",
                      }))}</h5>
              </div>
              <div className="form-btn">
                  <button className="cancel-btn" onClick={onBackHome}>Cancel</button>
                  <button className="submit-btn" onClick={onSubmit}>Submit</button>
              </div>
          </form>
      </>
  )
}

export default CheckoutForm