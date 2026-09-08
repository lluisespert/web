import React, { useState } from 'react';
import "../estilos/estilos.css";

function Experiencia() {

    const experiencias = [
            {
      id: 1,
      titulo: 'Técnico de Implantación de Sistemas',
      empresa: 'SanusTech',
      fecha: 'Diciembre 2025 - Marzo 2026',
      descripcion: 'Implantación y configuración de sistemas informáticos hospitalarios. Soporte técnico a hospitales.'
    },
    {
      id: 2,
      titulo: 'Administrador de Datos',
      empresa: 'McBath',
      fecha: 'Mayo 2024 - Agosto 2024',
      descripcion: 'Gestión, depuración y mantenimiento de bases de datos, desarrollo de programas de gestion de los mismos datos e interpretación de ellos.'
    },
    {
      id: 3,
      titulo: 'Grabador de Datos',
      empresa: 'Ayuntamiento de Andilla',
      fecha: 'Octubre 2023 - Mayo 2024',
      descripcion: 'Registro y actualización de datos administrativos en los sistemas municipales.'
    },
    {
      id: 4,
      titulo: 'Administrador de Sistemas y Desarrollador Web',
      empresa: 'Intercontainder S.A',
      fecha: 'Abril 2021 - Octubre 2021',
      descripcion: 'Mantenimiento de infraestructura de sistemas y desarrollo de aplicaciones web para la gestión interna de la empresa.'
    },
    {
      id: 5,
      titulo: 'Administrador de Sistemas y Desarrollador Web',
      empresa: 'Ayuntamiento de Andilla',
      fecha: 'Noviembre 2018 - Noviembre 2019',
      descripcion: 'Gestión de sistemas informáticos municipales y desarrollo de la página web del ayuntamiento.'
    },
    {
      id: 6,
      titulo: 'Administrador de Sistemas',
      empresa: 'Indra.',
      fecha: 'Diciembre 2017 - Febrero 2018',
      descripcion: 'Soporte y administración de sistemas informáticos a los bancos y grandes activos.'
    },
    {
      id: 7,
      titulo: 'Técnico Microinformático',
      empresa: 'PcBox.',
      fecha: 'Abril 2014 - Junio 2015',
      descripcion: 'Reparación y mantenimiento de equipos informáticos, atención al cliente y soporte técnico.'
    },
    {
      id: 8,
      titulo: 'Auxiliar Administrativo',
      empresa: 'Novaula',
      fecha: 'Mayo 2011 - Octubre 2011',
      descripcion: 'Tareas administrativas y de gestión documental a la dirección empresarial.'
    }
    ];

    const [experienciaSeleccionada, setExperienciaSeleccionada] = useState(null);

    const cerrarPopup = () => setExperienciaSeleccionada(null);

      return (
    <div className="proyectos-container">
      <h1 className="proyectos-title">Mi Experiencia Profesional</h1>
      <div className="proyectos-grid">
        {experiencias.map((experiencia) => (
          <div
            key={experiencia.id}
            className="proyecto-card"
            onClick={() => setExperienciaSeleccionada(experiencia)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setExperienciaSeleccionada(experiencia)}
          >
            <h3 className="proyecto-titulo">{experiencia.titulo}</h3>
            <p className="proyecto-descripcion">{experiencia.empresa}</p>
            <p className="proyecto-descripcion">{experiencia.fecha}</p>
          </div>
        ))}
      </div>

      {experienciaSeleccionada && (
        <div className="experiencia-modal-overlay" onClick={cerrarPopup}>
          <div className="experiencia-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="experiencia-modal-cerrar" onClick={cerrarPopup} aria-label="Cerrar">×</button>
            <h3 className="proyecto-titulo">{experienciaSeleccionada.titulo}</h3>
            <p className="proyecto-descripcion">{experienciaSeleccionada.empresa}</p>
            <p className="proyecto-descripcion">{experienciaSeleccionada.fecha}</p>
            <p className="experiencia-modal-descripcion">{experienciaSeleccionada.descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experiencia;