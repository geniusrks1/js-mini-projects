"use strict";
var ball = document.getElementById("ball");
var ballLeft = ball.offsetLeft;
var ballTop = ball.offsetTop;
var ballWidth = ball.clientWidth;
var ballHeight = ball.clientHeight;

var browserW = document.documentElement.clientWidth;
var browserH = document.documentElement.clientHeight;

ball.addEventListener('mouseover',moveball);


var newLeft,newTop;
function moveball(event){
	
	newLeft = Math.floor(Math.random()*browserW); // it will return a random integer in range [0,browserW]
	newTop = Math.floor(Math.random()*browserH);  // it will return a random integer in range [0,browserH]

	//newTop and newLeft will be different values than the previous ones
	// making it sure our new values different from balltop and ballleft
	while(newTop==ballTop && newLeft == ballLeft)
	{
		if(newTop == ballTop)
			newTop = Math.floor(Math.random()*browserH);
		else
			newLeft = Math.floor(Math.random()*browserW);
	}


	var corballL = false , corballT = false;
	while(!corballL || !corballT) //it wont go out of browser viewport
	{
		if(newLeft+ballWidth <= browserW)
			corballL = true;

		else
			newLeft = Math.floor(Math.random()*browserW);

		if(newTop+ballHeight <= browserH)
			corballT = true;
		else
			newTop = Math.floor(Math.random()*browserH);
	}
	
	toDo(ball.offsetTop,ball.offsetLeft,newTop,newLeft);

	

}
var id ;
function toDo(intialTop,intialLeft,finalTop,finalLeft){
 id = setInterval(function() { sendToDesti(finalTop,finalLeft,id);},1);
}
function sendToDesti(finalTop,finalLeft,id)
{
	var intialTop=ball.offsetTop;
	var intialLeft=ball.offsetLeft;
	
if(intialTop == finalTop && intialLeft == finalLeft)
	{
				clearInterval(id);
				return;
	}

	if(intialLeft<finalLeft)
		{
			if(intialLeft+20<=finalLeft)
				intialLeft+=20;
			else
				intialLeft = finalLeft;

		}
	else{
		if(intialLeft-20>=finalLeft)
			intialLeft-=20;
		else
			intialLeft = finalLeft;
	}


	if(intialTop<finalTop)
		{
			if(intialTop+20<=finalTop)
				intialTop+=20;
			else
				intialTop = finalTop;
		}
	else
	{
		if(intialTop-20>=finalTop)
			intialTop-=20;
		else
			intialTop = finalTop;
	}
	ball.style.left = intialLeft + "px";
	ball.style.top = intialTop + "px";
	



}