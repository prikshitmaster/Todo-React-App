import "./App.css";
import { Navbar } from "./component/Navbar";
import { TodoInput } from "./component/TodoInput";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container ">
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
