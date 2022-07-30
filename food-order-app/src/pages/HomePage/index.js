import React, { useEffect, useState } from 'react';
import "./HomePage.css";
import AppService from '../../services/getAPI';
import Loading from "../../components/Loading";
import MealItem from '../../components/MealItem';

export const HomePage = () => {
    const [meals, setMeals] = useState([]);
    const [quantity, setQuantity] = useState(0);
    
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(null);

    /* Fetch API */
    const fetchMeal = async () => {
        setLoading(true);
        const data = await AppService.getAPI("https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals");
        setMeals(data.splice(0, 4));
        setLoading(false);
    }


    const mealItems = meals.map((meal) => {
        // const { id, name, description, price, image} = meal;
        // meal.amount = amount;
        // console.log(meal);
        return (<>
            <MealItem meal={meal} />
            {/* <li key={id}>
                <div className='left-info'>
                    <div className='img-container'><img src={image} /></div>
                    <div className='meal-info'>
                        <span className='meal-title'>{name}</span>
                        <span className='meal-des'>{description}</span>
                        <span className='meal-price'>${price}</span>
                    </div>
                </div>
                <div className='right-info'><label htmlFor="amount">Amount <input className="amount" name="amount" onChange={onHandleChange} value={amount}></input></label>
                    <button onClick={() => { onHandleClick() } }>+ Add</button>
                </div>
            </li> */}
        </>);
    });
    useEffect(() => {
        fetchMeal();
    }, []);
    // console.log(meals);

    return (
        <div className='container-fluid'>
            <div className='row section-hero justify-content-center'>
                <div className="col-sm-8 col-md-6 col-lg-6 top-content">
                    <h3 style={{
                        fontFamily: "Playfair Display, serif, Georgia, Times New Roman, Times, serif", fontWeight: "400", fontSize: "xx-large"
                        , paddingBottom: "1.5rem"
                    }}>Delicious food, delivered to you</h3>
                    <p>Choose favorite meals from our board selection of available meals and enjoy a delicious lunch or dinner at home.
                        <br /><br />All out meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs.
                    </p>
                </div>
            </div>            
            <div className='row section justify-content-center'>
                <div className='col-sm-12 col-md-10 col-lg-10'>   
                    {loading === true ? <Loading /> : (
                        <ul className='food-list'>{ mealItems}</ul>
                    )}    
                    
                </div>
            </div>            
        </div>
    )
}
