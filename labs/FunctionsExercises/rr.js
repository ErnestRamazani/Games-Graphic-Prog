/*****************************************************
Author: Ernest Ramazani 
Date: September 15th, 2022
IUPUI // NEWM N220 Fall 2022
****************************************************/

/******************************************************************************************************
Algorithm 
---------
To make this program, we need to create a function that will take one argument. This arguemnt needs to
be a color. After we create a color, we will need to remove the red from the created color. 
Next, we need to call back the function and assign the new color to a circle. 
*******************************************************************************************************/

/*********************
CODES
*********************/

// Creating the fucntion to make canvas
function setup(){
   createCanvas(800,600); 
}

// Creating the main function 
function draw(){

   background(200);

//Making the variable that call the function to remove the red color
   let noRed = removeRed(color(170, 200, 150));

   fill(noRed);

//Creating the circle filled with the new color
   circle(150,150,150); 
 
}

//Making the function that will remove the red color, taking one argument 
function removeRed(noColorRed=color(170, 200, 150)){
 
//Removing the red color and returning the argument  
   noColorRed.setRed(0);
   return noColorRed; 


}
