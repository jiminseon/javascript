import React, { useContext } from "react";
import { UserContext } from "./ContextApp";

export default function Footer() {
  const ctx = useContext(UserContext);

  return (
    <div>
      Footer
      <div>유저이름:{ctx.user ? ctx.user.name : "X"}</div>
    </div>
  );
}
