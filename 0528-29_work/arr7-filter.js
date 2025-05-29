//새로운 배열을 만듬
const arr = [1,2,3,4,5];
const arr2 = arr.filter(function(value, indx, arr) {
    return value % 2 === 1;
})

console.log(arr);
console.log(arr2);
