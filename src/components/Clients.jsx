const MARCAS = ['Orbit', 'Nara', 'Mono', 'Hale & Co.', 'Polvo Estudio', 'Vela', 'Marejada', 'Tinto Lab'];

export default function Clients() {
  return (
    <section className="marcas" aria-label="Marcas con las que trabajamos">
      <div className="marcas__pista" aria-hidden="true">
        {[...MARCAS, ...MARCAS].map((m, i) => (
          <span className="marcas__item" key={`${m}-${i}`}>{m}</span>
        ))}
      </div>
    </section>
  );
}
