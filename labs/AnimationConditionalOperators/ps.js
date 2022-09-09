/*****************************************************
 Author: Ernest Ramazani 
 Date: September 8th, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
We are making a program that draw a ball with different color when the mouse is place at certain place
on the canvas. 
The way to make it will be to divide the canvas in two with respect to the width. After the division, 
we will need to create a different ball with different color wherever the mouse is placed. P5 offers 
a variable called mouseX and mouseY that will help to make the division. 
*******************************************************************************************************/

/*********************
 CODES
 *********************/


//Making a function that will create the canvas 
function setup(){
    createCanvas(400, 300)
}

// making the function where we will draw everything

function draw(){
//Drawing background 
    background(200)

//Defining our variables
    pos= width/2;
    rad=30; 
    shape = circle(mouseX, mouseY, rad);

//Making the conditions to either draw red or blue  
    if (mouseX < pos){
        fill("blue"); 
    shape; 
    }
    if (mouseX>pos){
        fill("red"); 
        shape; 
    }
}