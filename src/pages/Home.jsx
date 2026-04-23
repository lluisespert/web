import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/estilos.css";
import lluisImg from "../img/lluis.jpeg";

export default function Home() {
  return (
    <div className="home-screen">
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <img
            src={lluisImg}
            alt="Lluís Espert Cuquerella"
            className="home-portrait"
            style={{ width: "160px", height: "auto" }}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <p className="mt-3 home-description">
          Administrador de Sistemas, Desarrollador Web y Full Stack, con habilidades en Redes, Sistemas, Servidores, JavaScript, Python y Java. Sólida experiencia en la administración de sistemas y en el análisis de datos utilizando SQL y Oracle. Apasionado por la resolución de problemas y la eficiencia tecnológica. Comprometido con el aprendizaje continuo y orientado a resultados.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/lluis-espert-cuquerella/"
            className="social-link"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/lluis.espertcuquerella"
            className="social-link"
            aria-label="Facebook"
            title="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.33C0 23.4.6 24 1.33 24h11.5v-9.29H9.69V11.1h3.14V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.25h-1.92c-1.5 0-1.79.71-1.79 1.76v2.3h3.58l-.47 3.62h-3.11V24h6.1C23.4 24 24 23.4 24 22.67V1.33C24 .6 23.4 0 22.67 0z" />
            </svg>
          </a>
          <a
            href="https://github.com/lluisespert"
            className="social-link"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.45 3.44 10.07 8.2 11.7.6.1.82-.27.82-.6 0-.3-.01-1.08-.02-2.11-3.34.74-4.04-1.67-4.04-1.67-.55-1.43-1.35-1.81-1.35-1.81-1.1-.77.08-.76.08-.76 1.22.09 1.86 1.29 1.86 1.29 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.67-.31-5.47-1.36-5.47-6.04 0-1.33.46-2.42 1.22-3.28-.12-.31-.53-1.57.11-3.28 0 0 1-.33 3.3 1.26a11.2 11.2 0 0 1 6.01 0c2.3-1.59 3.3-1.26 3.3-1.26.64 1.71.23 2.97.11 3.28.76.86 1.22 1.95 1.22 3.28 0 4.69-2.8 5.72-5.48 6.03.43.38.81 1.12.81 2.26 0 1.63-.02 2.94-.02 3.34 0 .33.22.71.82.59C20.56 22.37 24 17.76 24 12.3 24 5.5 18.63 0 12 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}