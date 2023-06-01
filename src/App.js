import React from "react";

import { BrowserRouter,Routes, Route, useLocation } from "react-router-dom";

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

import Home from "./Pages/home";
import Contact from "./Pages/contact";
import About from "./Pages/about";
import Category from "./Pages/category";
import {Recipe} from "./Pages/recipe";

function NoMatch(){
  let location = useLocation();

  return(
    <div>
      <h1>Oops!</h1>
      <h3>Sorry,an unexpected error has orrured.</h3>
      <h5>Does not exist:{location.pathname}</h5>
    </div>
  );
}

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <main className="container content">
        <Routes>
          <Route path="*" element={<NoMatch/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="category/:name" element={<Category/>}/>
          <Route path="meal/:id" element={<Recipe />}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
