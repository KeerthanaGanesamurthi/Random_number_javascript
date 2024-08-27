
const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");
const max = 1;
const min = 6;
let randomNum;

mybutton.onclick = function(){
    randomNum = Math.flooor(Math.random() * mac)+min;
    mylabel.textContent = randomNum;
}

