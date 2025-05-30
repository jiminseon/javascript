// commonjs에서 module import => require(모듈경로)

// const module1= require('./commonjs-module');
// const result = module1.add(10, 20);

const { add }  = require('./commonjs-module');
const result = add(10, 20);

console.log("module1 import");
console.log(result);