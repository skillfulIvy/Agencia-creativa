const PROYECTOS = [
  {
    id: 'orbit',
    indice: '01',
    nombre: 'Orbit',
    categoria: 'Fintech · Brand & Producto',
    anio: '2026',
    texto: 'Sistema de marca y app de inversión para una fintech que quería sentirse seria sin ser aburrida.',
    img: '/img/work-orbit.jpg',
    tamano: 'feature',
  },
  {
    id: 'nara',
    indice: '02',
    nombre: 'Nara',
    categoria: 'Cosmética · Identidad & Packaging',
    anio: '2025',
    texto: 'Identidad visual y empaque para una marca de cosmética minimalista, pensada para repisa y para Instagram.',
    img: '/img/work-nara.jpg',
    tamano: 'mitad',
  },
  {
    id: 'mono',
    indice: '03',
    nombre: 'Mono',
    categoria: 'Café de especialidad · Brand & Editorial',
    anio: '2025',
    texto: 'Marca, empaque y material editorial para un tostador de café que vende directo al consumidor.',
    img: '/img/work-mono.jpg',
    tamano: 'mitad',
  },
];

export default function Work() {
  const feature = PROYECTOS.find((p) => p.tamano === 'feature');
  const mitades = PROYECTOS.filter((p) => p.tamano === 'mitad');

  return (
    <section className="trabajo" id="trabajo">
      <div className="contenedor">
        <div className="trabajo__encabezado" data-reveal>
          <h2 className="titulo-seccion">Selected Work</h2>
          <p className="trabajo__sub">Tres marcas, tres problemas distintos.</p>
        </div>

        <div className="trabajo__grid">
          <Caso p={feature} className="trabajo__item--feature" />
          {mitades.map((p) => (
            <Caso p={p} key={p.id} className="trabajo__item--mitad" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Caso({ p, className }) {
  return (
    <article className={`trabajo__item ${className}`} data-reveal>
      <span className="trabajo__indice" aria-hidden="true">{p.indice}</span>

      <div className="trabajo__visual-caja">
        <div
          className="trabajo__visual"
          style={{ backgroundImage: `url('${p.img}')` }}
        />
        <div className="trabajo__overlay">
          <span>Ver caso →</span>
        </div>
      </div>

      <div className="trabajo__cuerpo">
        <div className="trabajo__meta">
          <span>{p.categoria}</span>
          <span>{p.anio}</span>
        </div>
        <h3 className="trabajo__nombre">{p.nombre}</h3>
        <p className="trabajo__texto">{p.texto}</p>
      </div>
    </article>
  );
}
