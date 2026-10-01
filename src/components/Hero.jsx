function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <span className="hero-tag">🐶 Cuidado e carinho em cada detalhe</span>

        <h1>
          Seu pet merece
          <br />
          um dia de <span>estrela.</span>
        </h1>

        <p>
          Banho, tosa e muito amor para quem faz parte da sua família. Agende o
          próximo momento de cuidado do seu melhor amigo.
        </p>

        <div className="hero-actions">
          <a href="#agendamento" className="primary-button">
            Agendar agora →
          </a>

          <a href="#servicos" className="secondary-button">
            Conhecer serviços
          </a>
        </div>

        <div className="hero-info">
          <span>♡ Atendimento com carinho</span>
          <span>✦ Profissionais especializados</span>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85"
          alt="Dois cachorros aproveitando um momento juntos"
        />
        <div className="floating-card">
          <span>🐾</span>
          <div>
            <strong>Seu pet feliz!</strong>
            <p>Cuidado de verdade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
