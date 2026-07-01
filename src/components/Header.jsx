import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header reveal">
      <div className="hero-copy">
        <span className="eyebrow">Canal de Twitch</span>
        <h1>Rompecabezas 3D, gaming chill y fantasía en vivo</h1>
        <p>
          Bienvenido a un canal que mezcla rompecabezas detallados, sesiones de
          videojuegos relajados y una estética mágica pensada para la comunidad.
          Aquí la experiencia resulta visual, accesible y memorable.
        </p>

        <div className="hero-actions">
          <a href="#" className="btn primary">
            Mira el canal
          </a>
          <a href="#contact" className="btn secondary">
            Contacto rápido
          </a>
        </div>

        <div className="tags">
          <span className="tag">Rompecabezas 3D</span>
          <span className="tag">Streaming relajado</span>
          <span className="tag">Contenido creativo</span>
        </div>
      </div>

      <div className="hero-media">
        <img src={logo} alt="Logo del canal" className="logo" />
      </div>
    </header>
  );
}
