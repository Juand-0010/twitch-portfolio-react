import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import useReveal from "./hooks/useReveal";

const content = [
  { number: "01", title: "Rompecabezas 3D", text: "Construcciones paso a paso, detalles de las piezas y el ritmo suficiente para seguir cada avance." },
  { number: "02", title: "Gaming tranquilo", text: "Partidas para conversar, explorar y disfrutar sin convertir cada sesión en una competición." },
  { number: "03", title: "Comunidad presente", text: "Un chat con espacio para comentar el proceso, proponer retos y volver a la siguiente transmisión." },
];

function App() {
  useReveal();
  return <div className="app-shell"><Header />
    <main>
      <section id="contenido" className="content-section reveal" aria-labelledby="content-title">
        <div className="section-intro"><p className="section-kicker">El contenido</p><h2 id="content-title">Un canal para mirar, armar y conversar.</h2><p>Cada directo combina una actividad clara con tiempo para que la comunidad participe. La idea es que sepas qué encontrarás antes de entrar al canal.</p></div>
        <div className="content-grid">{content.map((item) => <article className="content-card" key={item.number}><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section id="formato" className="format-section reveal" aria-labelledby="format-title">
        <div><p className="section-kicker">El formato</p><h2 id="format-title">Así se vive cada sesión</h2></div>
        <ol className="format-list">
          <li><span>1</span><div><strong>Elegimos el reto</strong><p>Un rompecabezas, una construcción o un juego para abrir la sesión.</p></div></li>
          <li><span>2</span><div><strong>Avanzamos en directo</strong><p>El proceso es parte del contenido: aciertos, errores y descubrimientos incluidos.</p></div></li>
          <li><span>3</span><div><strong>El chat tiene voz</strong><p>Las preguntas y propuestas ayudan a decidir qué explorar después.</p></div></li>
        </ol>
      </section>
      <Contact />
    </main>
    <footer className="footer"><p>Portafolio del canal · Hecho con React y Vite</p><a href="https://github.com/Juand-0010/twitch-portfolio-react" target="_blank" rel="noreferrer">Ver código en GitHub <span aria-hidden="true">↗</span></a></footer>
  </div>;
}
export default App;
