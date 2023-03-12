var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');


box.addEventListener('click', countClick);

var count = 0;
function countClick(){
    count++;
    clickCount.innerText=count+" ";

}