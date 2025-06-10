import React, { useContext } from "react";
import { UserContext } from "./ContextApp";
import { useAuth } from "./ContextApp";

export default function Main() {
  // context객체를 사용하겠다.
  // 이 때 전달받는 context객체는 <Context.Provider>에서 value로 전달된 값.

  // const ctx = useContext(UserContext);
  const ctx = useAuth();

  // const { user, login, logout } = ctx;

  // const { user, login, logout } = useContext(UserContext);

  console.log("Main", ctx);

  return (
    <div>
      Main
      <div>유저이름: {ctx.user ? ctx.user.name : "X"}</div>
    </div>
  );
}
