import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryComponents/categoryList';
import Search from "../components/search"

import './pages.css';

export default function Home(){
    const [catalog,setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        //фильтрация от текущего каталога
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        });
    },[]);

    return(
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (<Preloader/> ): (<CategoryList catalog = {filteredCatalog}/>)}
        </>
    );
}