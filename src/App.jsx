import "./App.css";
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
      </main>
    </>
  );
}

export default App;
