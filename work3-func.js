const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

function pipeline(...fns) {
    return function (x) {
        return square(increment(double(x)));
    };
}

const pipelineFunc = pipeline(double, increment, square)
pipelineFunc(2) // ((2 * 2) + 1)^2 = 25