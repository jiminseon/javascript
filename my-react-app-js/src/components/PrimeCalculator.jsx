import React, { useState, useMemo } from "react";

function claculatePrimes(limit) {
  console.log(`limit: ${limit}에 대한 소수 계산`);
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
