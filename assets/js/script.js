

let countValue = 0;

let count = document.querySelector('#result');

count.innerHTML = countValue;

let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');
let reset = document.querySelector('#reset');


increment.addEventListener('click',inc)
decrement.addEventListener('click',dec)
reset.addEventListener('click',res)

function inc(){
   
    if (countValue < 5) {
        countValue++;
        count.innerHTML = countValue;
    } else {
        alert('Value should not exceed then 5')
    }
}
function dec(){
   
    if (countValue > 0) {
        countValue--;
        count.innerHTML = countValue;
    } else {
        alert('Value should not lower than 0')
    }
}
function res() {
    countValue = 0;
    count.innerHTML = countValue;
}