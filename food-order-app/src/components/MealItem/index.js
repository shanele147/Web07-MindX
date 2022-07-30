import React, {useState, useEffect} from 'react';
import "../../pages/HomePage/HomePage.css";

const MealItem = (props) => {
    const [amount, setAmount] = useState(0);
    /* onChange Handle */
    const onHandleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        const {name, value} = e.target;
        console.log({ name, value });
        setAmount(Number(value));        
    }
    /* onClick handle */
    const onHandleClick = (value) => { 
    }
    const { meal } = props;
    const { id, name, description, price, image} = meal;
  return (
    <>
          <li key={id}>
              <div className='left-info'>
                  <div className='img-container'><img src={image} /></div>
                  <div className='meal-info'>
                      <span className='meal-title'>{name}</span>
                      <span className='meal-des'>{description}</span>
                      <span className='meal-price'>${price}</span>
                  </div>
              </div>
              <div className='right-info'><label htmlFor="amount">Amount <input className="amount" name="amount" onChange={onHandleChange} value={amount}></input></label>
                  <button onClick={() => { onHandleClick() }}>+ Add</button>
              </div>
          </li>
      </>
  )
}

export default MealItem