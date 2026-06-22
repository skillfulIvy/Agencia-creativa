import GooeyWord from './GooeyWord';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__forma" aria-hidden="true" />
      <div className="contenedor">
        <p className="hero__eyebrow" data-reveal>Estudio creativo independiente</p>

        <h1 className="hero__titulo" data-reveal>
          Construimos marcas<br />
          que la gente <GooeyWord palabras={['recuerda.', 'confía.', 'elige.']} />
        </h1>

        <div className="hero__pie" data-reveal>
          <p className="hero__sub">
            Brand systems, experiencias digitales y motion. Trabajamos con
            fundadores que quieren una marca con criterio, no una plantilla.
          </p>
          <a href="#trabajo" className="boton boton--linea">Ver trabajo →</a>
        </div>
      </div>
    </section>
  );
}
