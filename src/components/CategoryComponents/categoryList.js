import CategotyItem from "./categoryItem";

import './category.css';

export default function CategoryList({catalog = []}) {
    return(
        <div className="list">
            {catalog.map((el) => (
                <CategotyItem key={el.idCategory} {...el}/>
            ))}
        </div>
    );
}