function add(a: number, b: number): number {
  //add(): number{}는 return type 명시
  return a + b;
}
const result = add(2, 5);
console.log(result);

const multiply = function (a: number, b: number): number {
  return a * b;
};

const multiply2: (a: number, b: number) => number = (a, b) => {
  return a * b;
};

//multiply2 와 multiply3은 똑같음
type MultiplyFunc = (a: number, b: number) => number;

const multiply3: MultiplyFunc = (a, b) => {
  return a * b;
};
