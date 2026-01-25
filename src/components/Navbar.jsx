import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/estilos.css'; // Archivo CSS para estilos 3D

function Navbar() {
  return (
    <nav className="navbar-3d">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/proyectos" className="navbar-link">Proyectos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/estudios" className="navbar-link">Estudios</Link>
          </li>
          <li className="navbar-item">
            <Link to="/experiencia" className="navbar-link">Experiencia Profesional</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;