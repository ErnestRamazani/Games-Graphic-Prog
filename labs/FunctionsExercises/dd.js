/*****************************************************
 Author: Ernest Ramazani 
 Date: September 15th, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
We need to create a function that takes two arguments. Next, we will draw a shape with argumets created. 
We will use mouseX and mouseY as coordinates. Finally, we need to create a condition that will 
call back the function into the main function. 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 // Creating the fucntion to make canvas
function setup(){
    createCanvas(800, 600)
}

// Creating the main function 
function draw(){

    background(200)

//Making the condition that will call the function drawCar
   if (mouseX){
    drawCar(200,50); 
   }
}

// Making the function that draw the car, taking 2 arguments 
function drawCar(x,y){
    rect(mouseX,mouseY,x,y); 
    rect(mouseX,mouseY,x,y,50); 
    circle(mouseX,mouseY,20);
    circle(mouseX,mouseY,20);
   
}
