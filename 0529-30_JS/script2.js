const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

function onClickEvent(e) {
    e.stopPropagation(); //이벤트 전파 안할거예요 
    console.log(e.target);
}
box1.addEventListener("click", onClickEvent);
box2.addEventListener("click", onClickEvent);
box3.addEventListener("click", onClickEvent);