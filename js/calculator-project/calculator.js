

var buttons = document.querySelectorAll(".button");
var display2 = document.querySelector(".display-2");



var op1=0;
var op2=null;
var operator=null;
 var disp1="";


for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',myfunction);
}

function myfunction(){
    var value=this.getAttribute("data-value"); 

            if(value=="+" || value=="-" || value=="*" || value=="/" || value=="%"){
                operator=value;
                op1=parseFloat(display2.textContent);
                display2.textContent="";
              }      
                else if(value=='CE'){
                  display2.innerText = display2.innerText.slice(0, -1)
                }                  

            else if(value=="AC"){
                            display2.innerText=""; //textContent
                            // display1.innerText="";
                            // displayTemp.innerText="";
                            // disp1="";
                            // disp2="";
                            // result="";

                        }
            else  if(value=="="){
                            op2=parseFloat(display2.textContent);
                            var result=0;
                            if(operator=="+"){
                             result=op1 + op2;}
                            else if(operator=="-"){
                               result=op1-op2;
                            }
                            else if(operator=="/"){
                               result=op1/op2;
                            }
                            else if(operator=="%"){
                               result=op1%op2;
                            }
                            else{
                                result=op1*op2;
                              }
                            
                              // display.innerText=result;

                            if(result){
                                display2.innerText=result; //textContent
                                op1=result;
                                op2=null;
                                operator=null;
                            }
                           
                            }

				                 else{
                                display2.innerText  +=value; //textContent/innerText
                            }}
    
                            










                            

 const operationEl = document.querySelectorAll(".operation");
 const numbersEl = document.querySelectorAll(".number");
 const equalEl = document.querySelector(".equal");

  window.addEventListener("keydown", (e) => {
  if (  e.key === "0" ||  e.key === "1" ||e.key === "2" || e.key === "3" ||e.key === "4" ||  e.key === "5" ||  e.key === "6" ||e.key === "7" || e.key === "8" ||                           
 e.key === "9" || e.key === "." ) {
                                clickButtonEl(e.key);
                              
                               
                              } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
                                clickOperation(e.key);
                              } else if (e.key === "*") {
                                clickOperation("x");
                                // console.log(e.key)
                              } else if (e.key == "Enter" || e.key === "=") {
                                clickEqual();
                              }
                              // console.log(e.key)
                            });
                            function clickButtonEl(key) {
                              numbersEl.forEach((button) => {
                                if (button.innerText === key) {
                                  button.click();
                                }
                              });
                            }
                            function clickOperation(key) {
                              operationEl.forEach((operation) => {
                                if (operation.innerText === key) {
                                  operation.click();
                                }
                              });
                            }
                            function clickEqual() {
                              equalEl.click();
                            }
                            
    

