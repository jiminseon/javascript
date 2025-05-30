const myBtn = document.getElementById('my-btn');
// // console.log(myBtn);

// myBtn.addEventListener('click', function(e) {
//     console.log('Element is Clicked');
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// });

// myBtn.onclick = function(e) {
//     console.log('Element is Clicked');
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// }

function onClickMyButton(e) {
    console.log('Element is Clicked');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}

myBtn.addEventListener("click", onClickMyButton);
// myBtn.removeEventListner("click", onClickMyButton);

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');

function sumInput() {
    let sum = parseInt(input1.value) + parseInt(input2.value);
    result.textContent = sum;
    console.log(input1.value);
    console.log(input2.value);
    console.log(result);
}
input1.addEventListener("input", sumInput);
input2.addEventListener("input", sumInput);