const arr = [1,2,3,4,5];
const result = arr.reduce(function(prev,cur,curIdx,arr) {
    console.log(prev);
    console.log(cur);
    console.log("-".repeat(10));
    return prev+cur;
}, 0)

console.log("result", result)