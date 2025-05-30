const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');


/**
 * 원하는 것
 * 1. input1(2)이 입력될 때마다 input1+input2를 계산한다.
 *    - input1이 입력될 때를 감지한다.
 *    - input1이 입력되면 input1 + input2를 계산하고 저장한다.
 * 2. 계산한 값을 result에 추가한다.
 */

function onChangeInput(e){
    // input1과 input2의 값들을 더해서
    // result에 보이도록 조작한다.
    const input1Value = isNaN(parseFloat(input1.value)) ? 0 : parseFloat(input1.value);
    const input2Value = isNaN(parseFloat(input2.value)) ? 0 : parseFloat(input2.value);

    result.innerHTML = input1Value + input2Value;
}

input1.addEventListener('input', onChangeInput);
input2.addEventListener('input', onChangeInput);

