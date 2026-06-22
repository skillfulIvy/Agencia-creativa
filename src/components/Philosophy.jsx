const CIFRAS = [
  { numero: '12+', etiqueta: 'marcas construidas' },
  { numero: '5', etiqueta: 'años en el oficio' },
  { numero: '3', etiqueta: 'países donde trabajamos' },
];

export default function Philosophy() {
  return (
    <section className="filosofia">
      <div className="contenedor filosofia__grid">
        <p className="filosofia__texto" data-reveal>
          Los equipos pequeños merecen grandes ideas. Diseñamos marcas, sitios
          y experiencias digitales para fundadores que cuidan los detalles.
        </p>

        <div className="filosofia__visual" data-reveal>
          <span className="filosofia__comilla" aria-hidden="true">”</span>
          <div className="filosofia__cifras">
            {CIFRAS.map((c) => (
              <div className="filosofia__cifra" key={c.etiqueta}>
                <span className="filosofia__numero">{c.numero}</span>
                <span className="filosofia__etiqueta">{c.etiqueta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
