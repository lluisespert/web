import { useState } from 'react'
import '../estilos/estilos.css';
import ScrollToTop from "../components/ScrollToTop.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from '../pages/Home.jsx';
import Proyectos from '../pages/Proyectos.jsx';

function App() {
  

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
