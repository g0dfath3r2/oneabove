import React from 'react';
import './App.scss';
import {Routes, Route} from "react-router-dom";
import Header from './components/header/desktop-header';
import Footer from './components/footer';
import Home from './pages/home';
import ContactUs from './pages/contact-us';
import AboutUs from './pages/about-us';
import Mobileheader from './components/header/mobile-header';
import "tw-elements";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
