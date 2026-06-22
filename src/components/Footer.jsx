export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer__fila">
        <span className="footer__marca">Cresta<span>.</span></span>

        <nav className="footer__links">
          <a href="#trabajo">Trabajo</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <p className="footer__legal">© {new Date().getFullYear()} Cresta Studio</p>
      </div>
    </footer>
  );
}
