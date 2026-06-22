import { useEffect, useRef, useState } from 'react';

const SECCIONES = ['trabajo', 'servicios', 'proceso'];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);
  const [activo, setActivo] = useState(null);
  const [pill, setPill] = useState({ x: 0, w: 0, visible: false });
  const linksRef = useRef({});
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setConScroll(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const secciones = SECCIONES.map((id) => document.getElementById(id)).filter(Boolean);
    if (secciones.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visible = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActivo(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    secciones.forEach((s) => observador.observe(s));
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    const medir = () => {
      const enlace = activo ? linksRef.current[activo] : null;
      if (!enlace || !navRef.current) {
        setPill((p) => ({ ...p, visible: false }));
        return;
      }
      const cajaNav = navRef.current.getBoundingClientRect();
      const cajaEnlace = enlace.getBoundingClientRect();
      setPill({ x: cajaEnlace.left - cajaNav.left, w: cajaEnlace.width, visible: true });
    };
    medir();
    window.addEventListener('resize', medir);
    return () => window.removeEventListener('resize', medir);
  }, [activo]);

  const cerrar = () => setAbierto(false);

  return (
    <header className={`navbar ${conScroll ? 'navbar--scroll' : ''}`}>
      <div className="contenedor navbar__fila">
        <a href="#inicio" className="navbar__marca" onClick={cerrar}>
          Cresta<span>.</span>
        </a>

        <nav className="navbar__links" ref={navRef}>
          <span
            className="navbar__pill"
            style={{
              transform: `translateX(${pill.x}px)`,
              width: pill.w,
              opacity: pill.visible ? 1 : 0,
            }}
            aria-hidden="true"
          />
          <a href="#trabajo" ref={(el) => (linksRef.current.trabajo = el)}>Trabajo</a>
          <a href="#servicios" ref={(el) => (linksRef.current.servicios = el)}>Servicios</a>
          <a href="#proceso" ref={(el) => (linksRef.current.proceso = el)}>Proceso</a>
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
