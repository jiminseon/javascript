const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

function pipeline(...fns) {
    return function (x) {
        return fns.reduce((acc, fn) => fn(acc), x);
    };
}

function pipelins(...fns) {
    return function(x) {
        fns.reduce(function(prev, curFunc) {
            return curFunc(prev);
        }, 0)
    }
}

function pipeline(...fns) {
    return function(x) {
        let result = x;
        fns.forEach(function(fn) {
            result = fn(result);
        })
        return result;
    }
};



const pipelineFunc = pipeline(double, increment, square)
console.log(pipelineFunc(2)); // ((2 * 2) + 1)^2 = 25
