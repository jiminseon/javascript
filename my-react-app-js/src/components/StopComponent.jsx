import { useEffect, useState } from "react";

export default function StopComponent() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h2>{time}초</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

// --------------------------------------
// 강사님 코드
// export default function StopWatch() {
//   const [seconds, setSeconds] = useState(0);
//   const [isStarting, setIsStarting] = useState(false);

//   const onClickStart = () => {
//     setIsStarting(true);
//   };

//   const onClickStop = () => {
//     setIsStarting(false);
//   };

//   const onClickReset = () => {
//     setSeconds(0);
//   };

//   useEffect(() => {
//     if (isStarting) {
//       const intervalId = setInterval(() => {
//         // setState함수 두가지 사용법.
//         // setState(값) ==> state를 해당 값으로 하겠다.
//         // setState((prevState)=>{ return newState })
//         //   ==> 이전 state를 인자로 받아서 새로운 state를 return
//         // setSeconds(seconds + 1);
//         setSeconds((prev) => prev + 1);
//       }, 1000);
//       return () => {
//         clearInterval(intervalId);
//       };
//     }
//   }, [isStarting]);

//   return (
//     <div>
//       <h1>StopWatch</h1>
//       <div>
//         <button onClick={onClickStart}>Start</button>
//         <button onClick={onClickStop}>Stop</button>
//         <button onClick={onClickReset}>Reset</button>
//       </div>

//       <div>현재 초: {seconds}</div>
//     </div>
//   );
// }
