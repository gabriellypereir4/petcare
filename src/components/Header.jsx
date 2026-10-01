function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="logo-icon">🐾</span>
        <span>PetCare</span>
      </a>

      <nav className="navigation">
        <a href="#inicio">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre nós</a>
      </nav>

      <a href="#agendamento" className="header-button">
        Agendar horário
      </a>
    </header>
  );
}

export default Header;
