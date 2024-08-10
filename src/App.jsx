import "./App.css";
import { Cta } from "./components/Cta/Cta";
import { Faq } from "./components/FAQ/Faq";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Opinions } from "./components/Opinions/Opinions";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Faq />
        <Opinions />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
