import React from 'react';
import "../estilos/estilos.css";
function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: 'Pare Castells',
      descripcion: 'Programa de gestión de falleros, de la Falla Pare Castells de Alzira, hecho en React y PhP.',
      github: 'https://github.com/lluisespert/gestio_falla_pare_castells'
    },
    {
      id: 2,
      titulo: 'Pare Castells 2',
      descripcion: 'Programa de gestión de falleros, de la Falla Pare Castells de Alzira, hecho con React y Python',
      github: 'https://github.com/lluisespert/gestio_falla_pare_castells_python'
    },
    {
      id: 3,
      titulo: 'Proyecto Final del Bootcamp de Full Stack',
      descripcion: 'Proyecto final del Bootcamp de Full Stack 4Geeks Academy, hecho con React y Flask.',
      github: 'https://github.com/lluisespert/proyecto_final_lluis_espert'
    },
    {
      id: 4,
      titulo: 'Gestor de Tareas',
      descripcion: 'Proyecto de un programa de gestión de tareas, para optimizar el tiempo de trabajo, hecho con React y PhP.',
      github: 'https://github.com/lluisespert/gestordetareas'
    },
    {
      id: 5,
      titulo: 'Web Personal',
      descripcion: 'Web Personal. Hecha con React.',
      github: 'https://github.com/lluisespert/web'
    }
  ];

  return (
    <div className="proyectos-container">
      <h1 className="proyectos-title">Mis Proyectos</h1>
      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">
            <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
            <p className="proyecto-descripcion">{proyecto.descripcion}</p>
            <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="proyecto-link">
              Ver código en GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;