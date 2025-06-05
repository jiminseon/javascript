import { useEffect, useState } from "react";

export default function BlinkCompnent({ text }) {
  const [showText, setShowText] = useState(true);

  const [count, setCount] = useState(0);

  useEffect(() => {
    // setInterval(callbackFn, millisecond):  millisecond마다 callbackFn를 실행시키는 함수

    //1초마다 해당건 실행
    const timeoutId = setInterval(() => {
      console.log("1초마다실행");
      //이전 value(showText)를 받아서 새로운 showText(!showText)를 받음 => false->true ture->false로 바꿈
      setShowText((showText) => !showText);
    }, 1000);

    return () => {
      console.log("재실행");
      clearInterval(timeoutId);
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>버튼</button>
      {showText ? text : null}
    </div>
  );
}
