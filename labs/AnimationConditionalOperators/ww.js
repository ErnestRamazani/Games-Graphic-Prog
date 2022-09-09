/*****************************************************
 Author: Ernest Ramazani 
 Date: September 8th, 2022
 IUPUI // CSCI N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
We are asked to make that move to the right until it reaches the end of the canvas and restart the same 
process
To make it possible, we will need a ball and its X position. After defining the X position at 0, we will need
to animate the ball to the right at X speed. The animation wil be made by adding by 1 to the position value 
of the ball. After the ball reaches the end of the canvas, we reset the value of X at 0, creating the 
infinte motion to right
*******************************************************************************************************/

/*********************
 CODES
 *********************/


//Defining Variables 
var xPos = 0; 
var xSpeed = 5; 
var xDir = 1; 

//Making a function that create the canvas  
function setup(){
    createCanvas(800,600)
}

//Making the main function to draw on 

function draw(){

//Background
    background(200)
 
//Updating the position of the ball with respecty to the speed and the direction 
    xPos = xPos + xSpeed * xDir; 

//Making conditions for infinite repetitions 

    if (xPos == width){
        xPos= 0;  
    }

//Drawing the actual circle 
    circle(xPos,height/2,50); 
}