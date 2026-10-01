import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}

export default App;
