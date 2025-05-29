const obj1 = {
    width: 100,
    height: 300
}
console.log(obj1)

const obj2 = {
    ...obj1, 
    name: "Youn"
}
console.log(obj2)

const obj3 = {
    ...obj2,
    width: 300
}
console.log(obj3)

