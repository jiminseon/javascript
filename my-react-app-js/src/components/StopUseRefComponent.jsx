import { useState, useRef } from "react";

export default function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef(null);

  const onClickStart = () => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const onClickStop = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const onClickReset = () => {
    setSeconds(0);
  };

  return (
    <div>
      <h1>StopWatch</h1>
      <div>
        <button onClick={onClickStart}>Start</button>
        <button onClick={onClickStop}>Stop</button>
        <button onClick={onClickReset}>Reset</button>
      </div>

      <div>현재 초: {seconds}</div>
    </div>
  );
}
