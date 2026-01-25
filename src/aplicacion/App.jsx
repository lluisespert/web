import React from 'react'
import { useState } from 'react'
import '../estilos/estilos.css';
import ScrollToTop from "../components/ScrollToTop.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from '../pages/Home.jsx';
import Proyectos from '../pages/Proyectos.jsx';
import Estudios from '../pages/Estudios.jsx';
import Experiencia from '../pages/Experiencia.jsx';

function App() {
  

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
