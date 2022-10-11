/*****************************************************
 Author: Ernest Ramazani 
 Date: 10 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
We need to create a program that draw 2 parallel rectangle
First, we will create 2 similar objects that define the characteristic of our rectangles
The obejct 2 need a different x position 
Then we make our rectangle using the our objects as arguments 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 // creating our first object 
let rect1 = {
    color:"#27F4f9",
    x: 100, 
    y:100, 
    width:100, 
    height:500
}

//creating our second object
let rect2 = {
    color:"#27F4f9",
    x: 500, 
    y:100, 
    width:100, 
    height:500
}

//function that create the canvas 
function setup(){
    createCanvas(800,800); 
}

//main function that draw forms 
function draw(){

//drawing background and the shapes 
    background(200); 
    fill(rect1.color); 
    rect(rect1.x, rect1.y, rect1.width, rect1.height)
    fill(rect2.color); 
    rect(rect2.x, rect2.y, rect2.width, rect2.height)
}