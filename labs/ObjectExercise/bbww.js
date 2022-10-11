/*****************************************************
 Author: Ernest Ramazani 
 Date: 10 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make that move to the right until it reaches the end of the canvas and restart the same 
process
To make it possible, we will need to create un object that have characteristic of the ball 
we will need a ball and its X position. After defining the X position at 0, we will need
to animate the ball to the right at X speed. The animation wil be made by adding by 1 to the position value 
of the ball. After the ball reaches the end of the canvas, we reset the value of X at 0, creating the 
infinte motion to right
All of this steps mus be done inside the object constructor 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

//creating the canvas 
function setup(){
    createCanvas(800,600)

    //creating our object 
    myBall = new Ball(); 
}


function draw(){

    //Background
    background(200)

    //accessing member function or calling our method 
    myBall.display(); 
    myBall.move(); 
 
}

//Object constructor 
function Ball(){
   
    //creating object characteristics
    this.xPos = 0; 
    this.xSpeed = 5; 
    this.xDir = 1; 

    //creating method that make the animation 
    this.move = function(){
        this.xPos = this.xPos + this.xSpeed * this.xDir; 
        if (this.xPos == width){
            this.xPos= 0;  
        }
    }
     //creating method that create the shape 
    this.display = function(){
        circle(this.xPos,height/2,50);
    } 
}