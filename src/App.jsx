import "./App.css";
import { Brand } from "./components/Brand/Brand";
import { Container } from "./components/Container/Container";
import { Login } from "./components/Login/Login";
// import { Register } from "./components/Register/Register";

function App() {
  return (
    <Container>
      <Brand />
      <Login />
      {/* <Register /> */}
    </Container>
  );
}

export default App;
