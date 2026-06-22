const PASOS = [
  { titulo: 'Descubrimiento', texto: 'Entendemos el negocio, la audiencia y el problema real antes de diseñar nada.' },
  { titulo: 'Estrategia', texto: 'Definimos posicionamiento, tono y prioridades. La base de todo lo que sigue.' },
  { titulo: 'Diseño', texto: 'Sistema de marca y producto, iterado en conjunto contigo, no entregado a ciegas.' },
  { titulo: 'Entrega', texto: 'Archivos, guías y soporte para que el equipo pueda sostener la marca sin nosotros.' },
];

export default function Process() {
  return (
    <section className="proceso" id="proceso">
      <div className="contenedor">
        <h2 className="titulo-seccion" data-reveal>Cómo trabajamos</h2>

        <div className="proceso__linea">
          {PASOS.map((p) => (
            <div className="proceso__paso" key={p.titulo} data-reveal>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
