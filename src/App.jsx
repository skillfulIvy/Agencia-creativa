import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  // Activa el reveal por scroll. Gateado por .js-activo en index.css:
  // si este efecto nunca corre, el contenido se queda visible por defecto.
  useEffect(() => {
    document.documentElement.classList.add('js-activo');

    const elementos = document.querySelectorAll('[data-reveal]');
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('en-vista');
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elementos.forEach((el) => observador.observe(el));

    const fallback = setTimeout(() => {
      elementos.forEach((el) => el.classList.add('en-vista'));
      observador.disconnect();
    }, 2500);

    return () => {
      observador.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
