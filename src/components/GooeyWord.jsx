import { useEffect, useId, useRef } from 'react';

export default function GooeyWord({ palabras, morphTime = 1, cooldownTime = 2.2 }) {
  const id = useId().replace(/:/g, '');
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducido) return;

    let indice = palabras.length - 1;
    let tiempo = new Date();
    let morph = 0;
    let espera = cooldownTime;
    let activo = true;

    const setMorph = (fraccion) => {
      if (!ref1.current || !ref2.current) return;
      ref2.current.style.filter = `blur(${Math.min(8 / fraccion - 8, 60)}px)`;
      ref2.current.style.opacity = `${Math.pow(fraccion, 0.4) * 100}%`;

      const inversa = 1 - fraccion;
      ref1.current.style.filter = `blur(${Math.min(8 / inversa - 8, 60)}px)`;
      ref1.current.style.opacity = `${Math.pow(inversa, 0.4) * 100}%`;
    };

    const hacerEspera = () => {
      morph = 0;
      if (!ref1.current || !ref2.current) return;
      ref2.current.style.filter = '';
      ref2.current.style.opacity = '100%';
      ref1.current.style.filter = '';
      ref1.current.style.opacity = '0%';
    };

    const hacerMorph = () => {
      morph -= espera;
      espera = 0;
      let fraccion = morph / morphTime;
      if (fraccion > 1) {
        espera = cooldownTime;
        fraccion = 1;
      }
      setMorph(fraccion);
    };

    let frame;
    function animar() {
      if (!activo) return;
      frame = requestAnimationFrame(animar);
      const ahora = new Date();
      const debeAvanzar = espera > 0;
      const dt = (ahora.getTime() - tiempo.getTime()) / 1000;
      tiempo = ahora;
      espera -= dt;

      if (espera <= 0) {
        if (debeAvanzar) {
          indice = (indice + 1) % palabras.length;
          if (ref1.current && ref2.current) {
            ref1.current.textContent = palabras[indice % palabras.length];
            ref2.current.textContent = palabras[(indice + 1) % palabras.length];
          }
        }
        hacerMorph();
      } else {
        hacerEspera();
      }
    }
    animar();

    return () => {
      activo = false;
      cancelAnimationFrame(frame);
    };
  }, [palabras, morphTime, cooldownTime]);

  return (
    <span className="gooey">
      <svg className="gooey__svg" aria-hidden="true" focusable="false">
        <defs>
          <filter id={`gooey-umbral-${id}`}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <span className="gooey__capa" style={{ filter: `url(#gooey-umbral-${id})` }}>
        <span className="gooey__texto hero__resalte" ref={ref1}>{palabras[palabras.length - 1]}</span>
        <span className="gooey__texto hero__resalte" ref={ref2}>{palabras[0]}</span>
      </span>
    </span>
  );
}
