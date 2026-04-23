import React from 'react';
import "../estilos/estilos.css";

function Experiencia() {

    const experiencias = [
            {
      id: 1,
      titulo: 'Técnico de Implantación de Sistemas',
      empresa: 'SanusTech',
      fecha: 'Diciembre 2025 - Marzo 2026'
    },
    {
      id: 2,
      titulo: 'Administrador de Datos',
      empresa: 'McBath',
      fecha: 'Mayo 2024 - Agosto 2024'
    },
    {
      id: 3,
      titulo: 'Grabador de Datos',
      empresa: 'Ayuntamiento de Andilla',
      fecha: 'Octubre 2023 - Mayo 2024'
    },
    {
      id: 4,
      titulo: 'Administrador de Sistemas y Desarrollador Web',
      empresa: 'Intercontainder S.A',
      fecha: 'Abril 2021 - Octubre 2021'
    },
    {
      id: 5,
      titulo: 'Administrador de Sistemas y Desarrollador Web',
      empresa: 'Ayuntamiento de Andilla',
      fecha: 'Noviembre 2018 - Noviembre 2019'
    },
    {
      id: 6,
      titulo: 'Administrador de Sistemas',
      empresa: 'Indra.',
      fecha: 'Diciembre 2017 - Febrero 2018'
    },
    {
      id: 7,
      titulo: 'Técnico Microinformático',
      empresa: 'PcBox.',
      fecha: 'Abril 2014 - Junio 2015'
    },
    {
      id: 8,
      titulo: 'Auxiliar Administrativo',
      empresa: 'Novaula',
      fecha: 'Mayo 2011 - Octubre 2011'
    }
    ];

      return (
    <div className="proyectos-container">
      <h1 className="proyectos-title">Mi Experiencia Profesional</h1>
      <div className="proyectos-grid">
        {experiencias.map((experiencia) => (
          <div key={experiencia.id} className="proyecto-card">
            <h3 className="proyecto-titulo">{experiencia.titulo}</h3>
            <p className="proyecto-descripcion">{experiencia.empresa}</p>
            <p className="proyecto-descripcion">{experiencia.fecha}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiencia;