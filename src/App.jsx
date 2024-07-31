import "./App.css";
import { Cta } from "./components/Cta/Cta";
import { Faq } from "./components/FAQ/Faq";
import { Features } from "./components/Features/Features";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Faq />
        <Cta />
      </main>
    </>
  );
}

export default App;
