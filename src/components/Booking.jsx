import { useState } from "react";

const services = [
  { id: 1, name: "Banho e secagem", price: 50 },
  { id: 2, name: "Banho e tosa", price: 85 },
  { id: 3, name: "Hidratação", price: 40 },
];

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

function Booking() {
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tutor, setTutor] = useState("");
  const [pet, setPet] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const selectedService = services.find(
    (service) => service.id === Number(serviceId),
  );

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  function handleSubmit(event) {
    event.preventDefault();

    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setConfirmed(true);
  }

  function resetBooking() {
    setStep(1);
    setServiceId("");
    setDate("");
    setTime("");
    setTutor("");
    setPet("");
    setPhone("");
    setConfirmed(false);
  }

  return (
    <section className="booking" id="agendamento">
      <div className="section-heading">
        <span className="section-tag">Vamos cuidar do seu pet?</span>
        <h2>Agende um horário</h2>
        <p>
          Escolha o serviço e encontre o melhor momento para o seu melhor amigo.
        </p>
      </div>

      <div className="booking-card">
        {confirmed ? (
          <div className="booking-success">
            <span className="success-icon">✓</span>
            <h3>Agendamento realizado!</h3>
            <p>
              Obrigado, {tutor}! O agendamento de {pet} foi registrado nesta
              demonstração.
            </p>

            <div className="booking-summary">
              <p>
                <strong>Serviço:</strong> {selectedService.name}
              </p>
              <p>
                <strong>Data:</strong> {date}
              </p>
              <p>
                <strong>Horário:</strong> {time}
              </p>
              <p>
                <strong>Valor:</strong>{" "}
                {selectedService.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <button className="primary-button" onClick={resetBooking}>
              Fazer novo agendamento
            </button>
          </div>
        ) : (
          <>
            <div className="booking-progress">
              <span>Etapa {step} de 3</span>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="booking-step">
                  <h3>Qual serviço seu pet precisa?</h3>

                  <div className="booking-services">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`booking-option ${
                          Number(serviceId) === service.id ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={Number(serviceId) === service.id}
                          onChange={(event) => setServiceId(event.target.value)}
                        />

                        <span>
                          <strong>{service.name}</strong>
                          <small>
                            {service.price.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </small>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="booking-step">
                  <h3>Escolha a data e o horário</h3>

                  <label className="form-label">
                    Data do atendimento
                    <input
                      type="date"
                      value={date}
                      min={minDate}
                      onChange={(event) => setDate(event.target.value)}
                      required
                    />
                  </label>

                  <span className="form-label">Horários disponíveis</span>

                  <div className="time-slots">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={`time-slot ${
                          time === slot ? "selected" : ""
                        }`}
                        onClick={() => setTime(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  {!time && (
                    <small className="field-hint">
                      Selecione um horário para continuar.
                    </small>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="booking-step">
                  <h3>Conte um pouco sobre vocês</h3>

                  <label className="form-label">
                    Nome do tutor
                    <input
                      type="text"
                      value={tutor}
                      onChange={(event) => setTutor(event.target.value)}
                      placeholder="Seu nome completo"
                      required
                    />
                  </label>

                  <label className="form-label">
                    Nome do pet
                    <input
                      type="text"
                      value={pet}
                      onChange={(event) => setPet(event.target.value)}
                      placeholder="Nome do seu pet"
                      required
                    />
                  </label>

                  <label className="form-label">
                    Telefone para contato
                    <input
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </label>

                  <div className="booking-summary">
                    <strong>Resumo do agendamento</strong>
                    <p>Serviço: {selectedService.name}</p>
                    <p>Data: {date}</p>
                    <p>Horário: {time}</p>
                    <p>
                      Valor:{" "}
                      {selectedService.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </div>
              )}

              <div className="booking-actions">
                {step > 1 && (
                  <button
                    type="button"
                    className="back-button"
                    onClick={() => setStep(step - 1)}
                  >
                    Voltar
                  </button>
                )}

                <button
                  type="submit"
                  className="primary-button"
                  disabled={
                    (step === 1 && !serviceId) ||
                    (step === 2 && (!date || !time))
                  }
                >
                  {step === 3 ? "Confirmar agendamento" : "Continuar →"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default Booking;
