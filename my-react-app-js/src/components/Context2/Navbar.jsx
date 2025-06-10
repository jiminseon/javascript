import { useContext, useState } from "react";
import { UserContext } from "./ContextApp";

export default function Navbar() {
  const ctx = useContext(UserContext);
  console.log("Navbar", ctx);

  const [inputText, setInputText] = useState("");

  return (
    <div>
      Navbar
      <div>
        <input type="text" onChange={(e) => setInputText(e.target.value)} />

        <button onClick={() => ctx.login(inputText)}>로그인</button>
      </div>
    </div>
  );
}
