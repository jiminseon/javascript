import React, { useContext } from "react";
import { UserContext } from "./ContextApp";

export default function Footer() {
  const ctx = useContext(UserContext);

  return (
    <div>
      Footer
      <div>유저이름: {ctx.user ? ctx.user.name : "X"}</div>
    </div>
  );
}

// export vs export default의 차이
// import할 때 어떻게 가지고 오느냐?

// export일 경우 import시 중괄호 필요.(이름 같게 해서)
// export default 일 경우 import시 중괄호 필요없음. (이름 달라도 된다.)

// export const myValue = 10; // import {myValue} from 'File'
// export default myValue2 = 10; // import MyCustomValue from 'File'

export const myValue = 10;
