import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";  
import { Header } from '../common/Header';
import { Home } from '../home/Home';
import { About } from './About';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { Footer } from '../common/Footer';

const Pages = () => {
  return (
    <Router>  
      <Header />
      <Routes basename="/personel-portfolio-2"> 
        <Route path='/' element={<Home />} /> 
        <Route path='/About' element={<About />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Pages;
