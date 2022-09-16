/*****************************************************
 Author: Ernest Ramazani 
 Date: September 15th, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
For this code, I did not use any algorithm since everything was given from the assignemnt. 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //Function that create the canvas 
 function setup(){
    createCanvas(450,800); 

}

//Main function 
function draw(){
    background(200)
    res=polarPoint(50); 
    translate(100,100); 
    circle(res.x, res.y,10); 

}

//Polar Function 
function polarPoint(r){
    x=r*Math.sin(mouseX); 
    y=r * Math.cos(mouseX);
    return createVector(x,y)

}