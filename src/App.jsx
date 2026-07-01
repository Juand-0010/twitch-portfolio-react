import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <div className="app-shell">
      <Header />

      <main className="page-content">
        <section className="overview reveal">
          <span className="eyebrow">Canal creativo en vivo</span>
          <div className="overview-grid">
            <article className="overview-card">
              <strong>Rompecabezas 3D</strong>
              <p>Construcciones detalladas, piezas épicas y retos visuales que motivan a la comunidad.</p>
            </article>
            <article className="overview-card">
              <strong>Gaming relajado</strong>
              <p>Partidas chill con variedad de géneros, humor y comentarios calmados para desconectar.</p>
            </article>
            <article className="overview-card">
              <strong>Comunidad amable</strong>
              <p>Un espacio acogedor para conversar, aprender y disfrutar contenido creativo junto a otros.</p>
            </article>
          </div>
        </section>

        <section className="featured reveal">
          <div className="section-header">
            <span>Lo que encontrarás</span>
            <h2>Una experiencia pensada para jugadores creativos</h2>
            <p>Presentación del canal con enfoque en entretenimiento, rompecabezas 3D y estilo visual inspirado en fantasía.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <h3>Live streams temáticos</h3>
              <p>Sesiones en vivo con contenido estructurado, dinámico y fácil de seguir para la audiencia.</p>
            </article>
            <article className="feature-card">
              <h3>Contenido visual atractivo</h3>
              <p>Diseño oscuro con toques de fuego y fantasía, pensado para transmitir una imagen profesional y memorable.</p>
            </article>
            <article className="feature-card">
              <h3>Interacción real</h3>
              <p>Botones directos a redes y contacto para facilitar que el público se conecte con el canal.</p>
            </article>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="footer">
        <p>Portafolio de Twitch creado para presentar el canal como una experiencia visual, cercana y alineada con contenido creativo.</p>
      </footer>
    </div>
  );
}

export default App;
