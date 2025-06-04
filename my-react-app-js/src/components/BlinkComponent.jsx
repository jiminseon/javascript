import { useEffect, useState } from "react";

export default function BlinkCompnent({ text }) {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // setInterval(callbackFn, millisecond):  millisecond마다 callbackFn를 실행시키는 함수
    const timeoutId = setInterval(() => {
      //이전 value(showText)를 받아서 새로운 showText(!showText)를 받음 => false->true ture->false로 바꿈
      setShowText((showText) => !showText);
    }, 1000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return <div>{showText ? text : null}</div>;
}
