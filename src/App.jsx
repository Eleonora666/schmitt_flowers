import React from 'react';
import AboutUs from './components/pages/about us/AboutUs';
import Auth from './components/pages/Auth/Auth';
import Basket from './components/pages/basket/Basket';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import ProductsList from './components/pages/productsList/ProductsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/elements/Nav';
import Footer from './components/elements/Footer';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/products' element={<ProductsList/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;