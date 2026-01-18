import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="reveal">🧩 Sobre el canal</h2>

      <p className="reveal">
        Este canal está dedicado a la construcción de rompecabezas 3D pieza por
        pieza, explorando modelos detallados, estructuras complejas y diseños
        creativos que requieren paciencia y concentración.
      </p>

      <p className="reveal">
        Mientras armamos, también disfrutamos de videojuegos tranquilos que
        acompañan el proceso, creando un ambiente relajado, amigable y sin
        estrés.
      </p>

      <h3 className="reveal">🎮 ¿Qué encontrarás aquí?</h3>

      <ul className="content-list reveal">
        <li>🧩 Construcción de rompecabezas 3D en tiempo real</li>
        <li>🎮 Sesiones de videojuegos relajados</li>
        <li>🛠️ Modelos épicos y construcciones imposibles</li>
        <li>🎧 Charlas tranquilas con la comunidad</li>
        <li>✨ Contenido creativo y sin prisas</li>
      </ul>

      <h3 className="reveal">📬 Contacto y redes</h3>

      <p className="reveal">
        Si quieres apoyar el canal, colaborar o simplemente pasar a saludar,
        aquí tienes algunos enlaces de contacto:
      </p>

      <div className="social-buttons reveal">
        <a href="#" className="btn twitch">Twitch</a>
        <a href="#" className="btn youtube">YouTube</a>
        <a href="#" className="btn twitter">X / Twitter</a>
        <a href="#" className="btn discord">Discord</a>
      </div>

      <p className="email reveal">
        📧 contacto@canal-demo.com
      </p>
    </section>
  );
}
