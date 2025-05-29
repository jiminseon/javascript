const arr1 = [1,2,3]

const arr2 = [
    ...arr1,
    4,
    5
] // length: 5
console.log(arr2)

const arr3 = [
    arr1,
    4,
    5
] // length: 3
console.log(arr3)
