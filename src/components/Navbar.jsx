import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/estilos.css';

function Navbar() {
  return (
    <nav
      className="navbar-3d"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      }}
    >
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
