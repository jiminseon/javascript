function greet(name: string, greeting?: string): string {
  // gretting이 있으면 greeting 값, 없으면 Hello
  return `${greeting || "Hello"}, ${name}`;
}

console.log(greet("윤수님", "안녕하세요"));
console.log(greet("인찬님"));

function greet2(name: string, greeting: string = "Hi"): string {
  // gretting이 있으면 greeting 값, 없으면 Hello
  return `${greeting}, ${name}`;
}

console.log(greet2("윤수님", "안녕하세요"));
console.log(greet2("인찬님"));

// greet(); // 에러 발생
// greet("윤수님", "안녕하세요", "반갑습니다."); // 에러 발생
