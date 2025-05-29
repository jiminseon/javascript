let sample = [1,2,3];
let sample2 = sample.map(function(value, idx, arr) {
    return value * 10;
})

console.log(sample2);