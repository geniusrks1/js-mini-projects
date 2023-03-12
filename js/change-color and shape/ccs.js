

var color = ["#e91e63","#00bcd4","#ffeb3b","#129d17","#d736f4","#171010","purple","pink","yellow","blue"];

var chColor = document.getElementById("change-color");
chColor.addEventListener("click",changeColor);
var i = 0;
function changeColor()
{
    document.getElementById("circle").style.backgroundColor=color[i++];
    if(i == 10)
      i = 0;


}


var chShape = document.getElementById("change-shape");
chShape.addEventListener("click",changeShape);
var x=0;
function changeShape(){
x++;
if(x==1){
    var ii = document.getElementsByClassName("inner");
    ii[0].className = "triangle-bottomleft";
    }
  else if(x==2){
    var ii = document.getElementsByClassName("triangle-bottomleft");
    ii[0].className = "triangle-Up-Shape";
  }
  else if(x==3){
    var ii = document.getElementsByClassName("triangle-Up-Shape");
    ii[0].className = "rectangle";
  }

  else if(x==4){
    var ii = document.getElementsByClassName("rectangle");
    ii[0].className = "circle";
  }

  else if(x==5){
    var ii = document.getElementsByClassName("circle");
    ii[0].className = "triangle-down-shape";
  }

  else{
    var ii = document.getElementsByClassName("triangle-down-shape");
    ii[0].className = "inner";
    x=0;
  }




}