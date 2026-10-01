const services = [
  {
    id: 1,
    icon: "🛁",
    name: "Banho e secagem",
    description: "Um banho relaxante com produtos especiais para o seu pet.",
    price: 50,
    duration: "40 min",
  },
  {
    id: 2,
    icon: "✂️",
    name: "Banho e tosa",
    description: "Banho completo e tosa para deixar seu pet ainda mais bonito.",
    price: 85,
    duration: "1h 30min",
  },
  {
    id: 3,
    icon: "🧴",
    name: "Hidratação",
    description: "Cuidado especial para manter os pelos macios e saudáveis.",
    price: 40,
    duration: "30 min",
  },
];

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="section-heading">
        <span className="section-tag">Nossos cuidados</span>

        <h2>
          Um cuidado especial
          <br />
          para cada pet
        </h2>

        <p>
          Escolha o serviço ideal para o seu melhor amigo. Aqui, cada detalhe é
          pensado com carinho.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.name}</h3>

            <p className="service-description">{service.description}</p>

            <div className="service-details">
              <span>⏱ {service.duration}</span>

              <strong>
                {service.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>

            <a href="#agendamento" className="service-button">
              Escolher serviço →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
