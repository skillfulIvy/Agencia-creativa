import { useEffect, useState } from 'react';

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setConScroll(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cerrar = () => setAbierto(false);

  return (
    <header className={`navbar ${conScroll ? 'navbar--scroll' : ''}`}>
      <div className="contenedor navbar__fila">
        <a href="#inicio" className="navbar__marca" onClick={cerrar}>
          Cresta<span>.</span>
        </a>

        <nav className="navbar__links">
          <a href="#trabajo">Trabajo</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto" className="boton boton--solido boton--sm">
            Hablemos
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`navbar__movil ${abierto ? 'abierto' : ''}`}>
        <div className="navbar__movil-inner">
          <a href="#trabajo" onClick={cerrar}>Trabajo</a>
          <a href="#servicios" onClick={cerrar}>Servicios</a>
          <a href="#proceso" onClick={cerrar}>Proceso</a>
          <a href="#contacto" className="boton boton--solido" onClick={cerrar}>Hablemos</a>
        </div>
      </nav>
    </header>
  );
}
