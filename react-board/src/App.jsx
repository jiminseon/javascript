import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Board />
    </>
  );
}

export default App;
