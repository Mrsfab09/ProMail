import "./App.css";
import LOGO from "./assets/logo.png";
// import { Button } from "./components/Button/Button";
// import { Brand } from "./components/Brand/Brand";
// import { Container } from "./components/Container/Container";
// import { Login } from "./views/Login/Login";

function App() {
  return (
    <nav>
      <div>
        <img className="logo" src={LOGO} alt="logo" />
      </div>
      <ul>
        <li>Features</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li></li>
      </ul>
    </nav>
  );
}

export default App;
