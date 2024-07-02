import "./App.css";
import { Brand } from "./components/Brand/Brand";
// import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
  return (
    <div className="container">
      <Brand />
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
