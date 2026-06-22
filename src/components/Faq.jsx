import { useState } from 'react';

const PREGUNTAS = [
  {
    pregunta: '¿Con qué tipo de marcas trabajan?',
    respuesta: 'Sobre todo con fundadores y equipos pequeños que están lanzando o repensando una marca y necesitan criterio, no una plantilla más.',
  },
  {
    pregunta: '¿Cuánto dura un proyecto típico?',
    respuesta: 'Un sistema de marca completo toma entre 4 y 7 semanas. Proyectos solo de identidad digital pueden cerrarse en 2 o 3.',
  },
  {
    pregunta: '¿Hacen solo diseño o también desarrollo?',
    respuesta: 'Ambos. Diseñamos y construimos el sitio o producto digital, para que la marca y la experiencia nazcan del mismo sistema.',
  },
  {
    pregunta: '¿Trabajan con empresas fuera de México?',
    respuesta: 'Sí, la mayoría de nuestro trabajo es remoto. El proceso está pensado para funcionar bien sin importar la zona horaria.',
  },
];

export default function Faq() {
  const [abierta, setAbierta] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="contenedor">
        <h2 className="titulo-seccion" data-reveal>Preguntas frecuentes</h2>

        <div className="faq__lista" data-reveal>
          {PREGUNTAS.map((item, i) => {
            const expandida = abierta === i;
            return (
              <div className="faq__item" key={item.pregunta}>
                <button
                  className="faq__pregunta"
                  aria-expanded={expandida}
                  onClick={() => setAbierta(expandida ? -1 : i)}
                >
                  <span>{item.pregunta}</span>
                  <span className="faq__icono" aria-hidden="true">{expandida ? '−' : '+'}</span>
                </button>
                <div className={`faq__respuesta-caja ${expandida ? 'abierta' : ''}`}>
                  <p className="faq__respuesta">{item.respuesta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
