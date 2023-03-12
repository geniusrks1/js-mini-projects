var x=document.getElementById('slider');
x.addEventListener('click',myfunction);


var count=0;
function myfunction(){
    count++;
    if(count%2==0){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black";
    document.getElementById("input").style.backgroundColor="white";}
    else{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("input").style.backgroundColor="black";


}
}
