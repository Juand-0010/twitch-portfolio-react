import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo del canal" className="logo" />

      <div className="header-text">
        <h1>🧩🎮 Bienvenido al canal</h1>
        <p>
          Aquí armamos rompecabezas 3D pieza por pieza, desde modelos épicos
          hasta construcciones imposibles, mientras disfrutamos de videojuegos
          para relajarnos y pasarla bien.
        </p>
        <p>Contenido tranquilo, buen ambiente y mucha paciencia 😄</p>
        <p>Si te gustan los retos, la creatividad y el gaming, este es tu lugar.</p>
      </div>
    </header>
  );
}
