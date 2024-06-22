import "./App.css";
import { Brand } from "./components/Brand/Brand";
import { Input } from "./components/Input/Input";

function App() {
  return (
    <div className="container">
      <Brand />
      <div className="form">
        <Input />
      </div>
    </div>
  );
}

export default App;
