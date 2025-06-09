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

// ------------------------------------------
// 강사님
// import { useEffect, useState } from "react";

// export default function Timer() {
//   const [seconds, setSeconds] = useState(10);
//   const [isStarting, setIsStarting] = useState(false);

//   useEffect(() => {
//     if (isStarting) {
//       const intervalId = setInterval(() => {
//         setSeconds((prev) => prev - 1);
//       }, 1000);
//       return () => {
//         clearInterval(intervalId);
//       };
//     } else {
//       setSeconds(10);
//     }
//   }, [isStarting]);

//   useEffect(() => {
//     if (isStarting && seconds === 0) {
//       alert("타이머 종료.");

//       setIsStarting(false);
//     }
//   }, [seconds, isStarting]);

//   return (
//     <div>
//       <h1>Timer</h1>
//       <div>
//         <button
//           onClick={() => {
//             setIsStarting(true);
//           }}
//         >
//           Start
//         </button>
//       </div>
//       <div>남은시간: {seconds}</div>
//     </div>
//   );
// }

// // 심화
// export default function Timer() {
//   const [seconds, setSeconds] = useState(4);
//   const [isStarting, setIsStarting] = useState(false);

//   const [userInputSeconds, setUserInputSeconds] = useState(0);

//   useEffect(() => {
//     if (isStarting) {
//       const intervalId = setInterval(() => {
//         setSeconds((prev) => prev - 1);
//       }, 1000);
//       return () => {
//         clearInterval(intervalId);
//       };
//     } else {
//       setSeconds(4);
//     }
//   }, [isStarting]);

//   useEffect(() => {
//     if (isStarting && seconds === 0) {
//       alert("타이머 종료.");

//       setIsStarting(false);
//     }
//   }, [seconds, isStarting]);

//   return (
//     <div>
//       <h1>Timer</h1>
//       <div>
//         <input
//           type="number"
//           onChange={(e) => {
//             setUserInputSeconds(parseInt(e.target.value));
//           }}
//         />
//         <button
//           onClick={() => {
//             setSeconds(userInputSeconds);
//             setIsStarting(true);
//           }}
//         >
//           Start
//         </button>
//       </div>
//       <div>남은시간: {seconds}</div>
//     </div>
//   );
// }
