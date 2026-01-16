import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Logo del canal" className="logo" />
        <h1>Rompecabezas 3D & Gaming</h1>
      </header>

      <section className="hero">
        <h2>🧩🎮 Bienvenido al canal</h2>
        <p>
          Aquí armamos <strong>rompecabezas 3D pieza por pieza</strong>, desde modelos épicos
          hasta construcciones imposibles, mientras disfrutamos de videojuegos
          tranquilos para relajarnos y pasarla bien.
        </p>
        <p className="extra">
          🎥 Contenido calmado · 😄 Buen ambiente · 🧠 Mucha paciencia
        </p>
      </section>

      <footer className="footer">
        <p>📺 Sígueme en Twitch</p>
      </footer>
    </div>
  )
}

export default App
