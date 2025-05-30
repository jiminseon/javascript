// ES module
// 모듈 내보내기
// export : (import 시 import { <function-name> } from '모듈이름')
// - eg.) export function add(num1, num2)
        // import {add} from '모듈이름'

// export default : (import 시 import <사용할 이름> from '모듈이름')
// - eg.) export default function add(num1, num2)
        // import myAdd from '모듈이름'
// (import 시 이름을 지정해서 불러올 수 있다. ) 




// export, export default
export function add(num1, num2) {
    return num1 + num2;
}

export function sub(num1, num2) {
    return num1 - num2;
}

class Sample {
    constructor(name) {
        this.name = name;
    }
}

//import시 다음처럼 사용.
// import {add, sub} from '<module-name>';
// export { add, sub, Sample }

//import 시
// import <변수이름> from '<module-name>';
// eg.) import S from './esm-module.js';
export default Sample;