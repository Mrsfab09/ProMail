import "./App.css";
import { FAQ } from "./components/FAQ/Faq";
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
        <FAQ />
      </main>
    </>
  );
}

export default App;
