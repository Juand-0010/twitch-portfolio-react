import "./Header.css";
import logo from "../assets/logo.png";
export default function Header() {
  return <header className="hero"><nav className="nav" aria-label="Navegación principal"><a className="brand" href="#inicio" aria-label="Inicio">TW<span>•</span>LIVE</a><div className="nav-links"><a href="#contenido">Contenido</a><a href="#formato">Formato</a><a href="#contacto">Contacto</a></div></nav>
    <div id="inicio" className="hero-grid reveal"><div className="hero-copy"><p className="live-label"><span aria-hidden="true" /> CANAL CREATIVO EN TWITCH</p><h1>Rompecabezas 3D y gaming para bajar el ritmo.</h1><p className="hero-description">Un espacio de directos con construcciones detalladas, juegos relajados y conversaciones sin prisa.</p><div className="hero-actions"><a className="button primary" href="#contacto">Seguir el canal <span aria-hidden="true">↓</span></a><a className="button text-button" href="#contenido">Conocer el contenido <span aria-hidden="true">→</span></a></div></div><div className="hero-art" aria-label="Identidad visual del canal"><div className="signal signal-one" /><div className="signal signal-two" /><div className="art-frame"><img src={logo} alt="Logo del canal" /></div><div className="now-card"><span>EN EL CANAL</span><strong>Piezas, partidas y conversación</strong></div></div></div>
  </header>;
}
