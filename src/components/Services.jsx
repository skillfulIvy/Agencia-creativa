const SERVICIOS = [
  {
    num: '01',
    titulo: 'Brand Systems',
    texto: 'Identidad verbal y visual completa: nombre, tono, logotipo, tipografía y sistema de color pensado para escalar más allá de un solo lanzamiento.',
  },
  {
    num: '02',
    titulo: 'Digital Experiences',
    texto: 'Sitios y productos digitales diseñados como extensión de la marca, no como plantillas genéricas. De la estrategia al pixel final.',
  },
  {
    num: '03',
    titulo: 'Motion & Identity',
    texto: 'Sistemas de movimiento, video de marca y assets animados que mantienen la identidad coherente en cualquier formato.',
  },
];

export default function Services() {
  return (
    <section className="servicios" id="servicios">
      <div className="contenedor">
        <h2 className="titulo-seccion" data-reveal>Lo que hacemos</h2>

        <div className="lista-servicios">
          {SERVICIOS.map((s) => (
            <article className="fila-servicio" key={s.num} data-reveal>
              <span className="fila-servicio__num">{s.num}</span>
              <h3 className="fila-servicio__titulo">{s.titulo}</h3>
              <p className="fila-servicio__texto">{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
