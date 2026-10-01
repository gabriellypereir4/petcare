import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Booking from "./components/Booking";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Booking />
      </main>
    </>
  );
}

export default App;
