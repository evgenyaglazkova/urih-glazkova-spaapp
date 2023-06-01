import Meal from './meal';

import './mealList.css';

export default function MealList({meals}){
    return(
        <div className='list'>
            {meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal}/>
            ))}
        </div>
    );
}