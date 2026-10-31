
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./cv.css"; // Tu CSS existente

function App() {
  const [cv, setCv] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarCV() {
      try {
        const respuesta = await fetch("/cv.json");

        if (!respuesta.ok) {
          throw new Error("No se pudo cargar cv.json");
        }

        const datos = await respuesta.json();
        setCv(datos);

      } catch (error) {
        setError(error.message);
      }
    }

    cargarCV();
  }, []);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!cv) {
    return <p className="loading">Cargando CV...</p>;
  }

  return (
    <main className="container">

      <header className="cv-header">
        <h1>{cv.nombre}</h1>
        <h2>{cv.titulo}</h2>
        <p>{cv.resumen}</p>
      </header>

      <section className="cv-section">
        <h2>Experiencia</h2>

        {cv.experiencia?.map((trabajo, index) => (
          <article className="experience-item" key={index}>
            <h3>{trabajo.puesto}</h3>
            <p>{trabajo.lugar}</p>
            <p>{trabajo.periodo}</p>
            <p>{trabajo.descripcion}</p>
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h2>Formación académica</h2>

        {cv.formacion?.map((estudio, index) => (
          <article className="education-item" key={index}>
            <h3>{estudio.nombre}</h3>
            <p>{estudio.institucion}</p>
            <p>{estudio.periodo}</p>
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h2>Proyectos</h2>

        {cv.proyectos?.map((proyecto, index) => (
          <article className="project-item" key={index}>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.url}>Ver proyecto</a>
          </article>
        ))}
      </section>

    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
