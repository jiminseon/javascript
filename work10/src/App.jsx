import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Board from "./Component/Board";

function App() {
  return (
    <BrowserRouter>
      <Board />
    </BrowserRouter>
  );
}

export default App;
