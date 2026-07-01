import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact reveal">
      <h2>🧩 Sobre el canal</h2>

      <p>
        Aquí convergen los rompecabezas 3D y el gaming relajado. El canal está
        diseñado para quienes disfrutan de contenido visualmente atractivo y de
        una comunidad cercana.
      </p>

      <p>
        Las transmisiones priorizan la calma, la creatividad y la interacción
        positiva, con momentos de construcción, exploración y juego sin estrés.
      </p>

      <h3>🎮 ¿Qué encontrarás aquí?</h3>

      <ul className="content-list">
        <li>Rompecabezas en vivo con enfoque en detalle y ritmo pausado.</li>
        <li>Gaming tranquilo con títulos variados y participación de la audiencia.</li>
        <li>Visuales temáticos de fantasía que refuerzan la identidad del canal.</li>
        <li>Comunidad cordial y motivadora para nuevos espectadores.</li>
      </ul>

      <h3>📬 Contacto directo</h3>

      <p>
        Conecta con el canal a través de las redes sociales o envía un mensaje para
        saber más sobre próximas sesiones y colaboraciones.
      </p>

      <div className="social-buttons">
        <a href="#" className="btn twitch">Twitch</a>
        <a href="#" className="btn youtube">YouTube</a>
        <a href="#" className="btn twitter">X / Twitter</a>
        <a href="#" className="btn discord">Discord</a>
      </div>

      <p className="email">📧 contacto@canal-demo.com</p>
    </section>
  );
}
