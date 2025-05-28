const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

function pipeline(...fns) {
    return function (x) {
        return fns.reduce((acc, fn) => fn(acc), x);
    };
}


const pipelineFunc = pipeline(double, increment, square)
console.log(pipelineFunc(2)); // ((2 * 2) + 1)^2 = 25
