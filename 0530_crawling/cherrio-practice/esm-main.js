// import { add, sub } from './esm-module.js'

// const add1 = add(1, 2);
// const sub1 = sub(10, 5);

// console.log(add1);
// console.log(sub1);

//---------------------
// import * as MyModule from './esm-module.js'
// const result1 = MyModule.add(1,2);
// console.log(result1);


//---------------------
// export default 모듈 임포트
//import MySample from './esm-module'; 처럼 이름을 달리해도 OK
import Sample from './esm-module.js'; 
const sample = new Sample('뽀삐');
console.log(sample)

// import * as MyModule from './esm-module.js'
// console.log(MyModule.add(1,2));
// const mySample = new MyModule.default("뽀삐");

// import { default as sample } from './esm-module.js'
// const myNewSample = new sample("뽀삐");