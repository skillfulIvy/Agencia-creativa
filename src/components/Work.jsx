const PROYECTOS = [
  {
    id: 'orbit',
    nombre: 'Orbit',
    categoria: 'Fintech · Brand & Producto',
    anio: '2026',
    texto: 'Sistema de marca y app de inversión para una fintech que quería sentirse seria sin ser aburrida.',
    img: '/img/work-orbit.jpg',
  },
  {
    id: 'nara',
    nombre: 'Nara',
    categoria: 'Cosmética · Identidad & Packaging',
    anio: '2025',
    texto: 'Identidad visual y empaque para una marca de cosmética minimalista, pensada para repisa y para Instagram.',
    img: '/img/work-nara.jpg',
  },
  {
    id: 'mono',
    nombre: 'Mono',
    categoria: 'Café de especialidad · Brand & Editorial',
    anio: '2025',
    texto: 'Marca, empaque y material editorial para un tostador de café que vende directo al consumidor.',
    img: '/img/work-mono.jpg',
  },
];

export default function Work() {
  return (
    <section className="trabajo" id="trabajo">
      <div className="contenedor">
        <div className="trabajo__encabezado" data-reveal>
          <h2 className="titulo-seccion">Selected Work</h2>
          <p className="trabajo__sub">Tres marcas, tres problemas distintos.</p>
        </div>

        <div className="trabajo__lista">
          {PROYECTOS.map((p) => (
            <article className="trabajo__item" key={p.id} data-reveal>
              <div
                className="trabajo__visual"
                style={{ backgroundImage: `url('${p.img}')` }}
              />
              <div className="trabajo__cuerpo">
                <div className="trabajo__meta">
                  <span>{p.categoria}</span>
                  <span>{p.anio}</span>
                </div>
                <h3 className="trabajo__nombre">{p.nombre}</h3>
                <p className="trabajo__texto">{p.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
