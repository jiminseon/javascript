import { useEffect, useState } from "react";

export default function TimerComponent() {
  const [time, setTime] = useState(0);
  const [input, setInput] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      if (time <= 0) {
        return;
      }
      setTime((time) => time - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, time]);

  useEffect(() => {
    if (time <= 0) {
      setIsRunning(false);
      alert("타이머 끝남");
    }
  }, [time]);

  const handleTimer = () => {
    if (input > 0) {
      setTime(input);
      setIsRunning(true);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      ></input>
      <button onClick={handleTimer}>확인</button>
      {time}
    </div>
  );
}
