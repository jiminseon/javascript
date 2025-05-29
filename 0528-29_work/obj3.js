const options = {
    title: "Menu",
    width: 100,
    height: 200,
    k1: 'v1',
    k2: 'v2',
};

const height = 1000;
// {객체 프로퍼티 : 목표 변수 }
const {title, height : h, ...rest} = options; // 다른 변수가 선언되어있을 때 height:h로 변경 가능
console.log(title); // Menu
console.log(h); // 200
console.log(rest); // { width: 100, k1: 'v1', k2: 'v2' }