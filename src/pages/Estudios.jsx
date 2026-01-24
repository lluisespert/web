function Estudios() {
  const estudios = [
    {
      id: 1,
      titulo: 'Técnico de Sistemas y Redes',
      descripcion: 'Grado Medio de Técnico de Sistemas y Redes.'
    },
    {
      id: 2,
      titulo: 'Técnico Superior en Administración de Sistemas',
      descripcion: 'Grado Superior en Técnico de Administración de Sistemas'
    },
    {
      id: 3,
      titulo: 'Técnico Superior de Desarrollo de Aplicaciones Web',
      descripcion: 'Grado Superior en Técnido de Desarrollo de Aplicaciones Web.'
    },
    {
      id: 4,
      titulo: 'Técnico Superior de Desarrollo de Aplicaciones Multiplataforma',
      descripcion: 'Grado Superior en Técnico de Desarrollo de Aplicaciones Multiplataforma.'
    },
    {
      id: 5,
      titulo: 'Bootcamp React y Flask',
      descripcion: 'Bootcamp de React y Flask, de la mano de 4GeeksAcademy.'
    },
    {
      id: 6,
      titulo: 'Base de Datos de Oracle',
      descripcion: 'Certificación de Base de Datos por la Oracle Foundation.'
    },
    {
      id: 6,
      titulo: 'Java 7',
      descripcion: 'Certificaciónde programación de Java por la Oracle Foundation.'
    },
    {
      id: 7,
      titulo: 'Redes',
      descripcion: 'Curso de Instalación y Mantenimiento de Redes de 600h por el Servef (Labora).',
    }
  ];

  return (
    <div className="proyectos-container">
      <h1 className="proyectos-title">Mis Estudios</h1>
      <div className="proyectos-grid">
        {estudios.map((estudio) => (
          <div key={estudio.id} className="proyecto-card">
            <h3 className="proyecto-titulo">{estudio.titulo}</h3>
            <p className="proyecto-descripcion">{estudio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Estudios;