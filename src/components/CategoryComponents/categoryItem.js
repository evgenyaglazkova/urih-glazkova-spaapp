import { Link } from "react-router-dom";

import './category.css';

export default function CategotyItem(props){
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory}/>
            </div>
        
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>

            <div className="card-action">  
                <Link to={`/category/${strCategory}`} className="btn red lighten-3">
                    Watch category
                </Link>
            </div>
        </div>
    );
}