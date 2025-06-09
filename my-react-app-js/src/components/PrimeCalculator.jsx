import { useState, useMemo, useEffect } from "react";

// 소수를 계산하는 함수
function calculatePrimes(limit) {
  console.log(`limit: ${limit} 에 대한 소수 계산`);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

export default function PrimeCalculator(props) {
  const [limit, setLimit] = useState(10);
  const [toggle, setToggle] = useState(false);

  // 낭비 : toggle이라는 state(prime 계산에 사용 x)가 변경될 때마다 다시 계산된다는 점이 낭비임.
  //   const primes = calculatePrimes(limit);

  //useMemo(callbackFn, depArray): depArray가 변경될때마다 callbackFn을 실행하여 return값을 기록해놓는다.
  const primes = useMemo(() => {
    return calculatePrimes(limit);
  }, [limit]);

  console.log("component 재실행");
  return (
    <div>
      <button
        onClick={(e) => {
          setToggle((prev) => !prev);
        }}
      >
        버튼
      </button>

      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <p>계산된 소수: {primes.join(", ")}</p>
    </div>
  );
}
