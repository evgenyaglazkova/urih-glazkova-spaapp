import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {getFilteredCategory} from "../api";

import Preloader from "../components/Preloader.js";
import MealList from "../components/MealList/mealList";

export default function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className="btn red lighten-3 back" onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </>
    );
}