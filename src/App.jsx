import "./App.css";
import { Brand } from "./components/Brand/Brand";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div className="container">
      <Brand />
      <Form formName={"Login"} value={"Sign Up"} />
    </div>
  );
}

export default App;
