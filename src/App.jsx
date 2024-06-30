import "./App.css";
import { Brand } from "./components/Brand/Brand";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div className="container">
      <Brand />
      <Form
        formName={"Login"}
        value={"Sign Up"}
        question={"You dont have an account?"}
      />
      {/* <Form
        formName={"Sign Up"}
        value={"Login"}
        question="You already have an account?"
      /> */}
    </div>
  );
}

export default App;
