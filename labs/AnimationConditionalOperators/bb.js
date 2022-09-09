/*****************************************************
 Author: Ernest Ramazani 
 Date: September 8th, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
 We are asked to create a bouncing ball that bounce after hitting the border of a canvas 
 To make that possible, we will need: 
 1) The starting position of our ball 
 2) Creating the animation
 3) Making border so that the ball does not go out of the canvas 
 First, we will create a ball at xy positions. To animate, we will need to increase the ball position
by 1 with respect to the y and x positon. After the ball reaches the boundairies of the canvas, we 
will need to decrease its position by 1 to create a form of collision  
*******************************************************************************************************/

/*********************
 CODES
 *********************/


// Defining variables for poositions, speed and direction
var xPos=0; 
var yPos = 0; 
var xDir = 1; 
var yDir= 1;
var xSpeed = 5; 
var ySpeed= 5; 

// Creating fucntion to make canvas 
function setup(){
    createCanvas(800,600); 
   
}

// Creating the main function that will control the entire code  

function draw(){
    
// Creating background
    background(200)
    
//Assigning new values to our positions 
//These new value will update continuosly making a sense of animation 
    xPos = xPos + xSpeed * xDir
    yPos=yPos + ySpeed * yDir
   
//Creation of conditions to create border, so that the ball keep bouncing in the canvas forever
    if (xPos > width || xPos < 0  ) {
        xDir *= -1;
      }
      if (yPos > height || yPos < 0 ) {
        yDir *= -1;
      }
//Making the ball 
    circle(xPos,yPos,30); 

}
//end 