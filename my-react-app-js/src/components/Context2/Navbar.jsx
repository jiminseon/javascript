import React, { useContext } from "react";
import { UserContext } from "./ContextApp";

export default function Navbar() {
  const ctx = useContext(UserContext);
  console.log("Navbar", ctx);
  return (
    <div>
      Navbar
      <div>
        <input type="text" />
        <button>로그인</button>
      </div>
    </div>
  );
}
