import React, { useState, useEffect } from 'react';
import "../../pages/HomePage/HomePage.css";

const MealItem = (props) => {
    const { meal, cart } = props;
    const { id, name, description, price, image } = meal;
    const [amount, setAmount] = useState(0);

    /* onChange Handle */
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        // console.log({ name, value });
        setAmount(Number(value));
    }

    /* onClick handle */
    const onHandleClick = () => {
       props.onAddItemToCart(meal,amount);
        setAmount(0);
    }

    return (
        <>
            <li>
                <div className='left-info'>
                    <div className='img-container'>
                        <img src={image} />
                    </div>
                    <div className='meal-info'>
                        <span className='meal-title'>{name}</span>
                        <span className='meal-des'>{description}</span>
                        <span className='meal-price'>${price}</span>
                    </div>
                </div>
                <div className='right-info'>
                    <label htmlFor="amount" id={id}>Amount
                        <input type="number" className="amount" name={id} onChange={onHandleChange} value={amount > 0 ? amount : 0}></input>
                    </label>
                    <button onClick={onHandleClick} disabled={amount > 0 ? false : true}>+ Add</button>
                </div>
            </li>
        </>
    )
}

export default MealItem