/*****************************************************
 Author: Ernest Ramazani 
 Date: 10 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a shape using objects. We will create our object first 
then we will have to create a constructor. Inside the constructor we will create 
the object characteristic. Then we eill make our method that draw shapes 
Finally, we will call back our method inside the draw function 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //This function will create the canvas and the object 
function setup(){
    createCanvas(800,800); 
    myDrawObject = new DrawObject()
}

//This function will create the background and call the method created inside the constructor 
function draw(){
    background(200)
    
    //calling back the method 
    myDrawObject.displayRect(); 
    myDrawObject.displayCircle(); 
  
}

//This function create the constructor and the methods 
//Making constructor
function DrawObject(){

    //Object characteristic 
    this.yPos = 300; 
    this.xPos = 200; 
    this.xPosCircle = 300; 
    this.yPosCircle = 250; 
    this.width = 80; 
    this.height = 80; 
    this.color = color(0,45,67); 
    this.colorCircle = color(122,25,80)
   


    //method that draw the first shape 
    this.displayRect = function(){
        fill(this.color); 
       rect(this.xPos, this.yPos,this.xPos, this.yPos)

    }
      //method that draw the second shape 
    this.displayCircle = function(){
    fill(this.colorCircle); 
    ellipse(this.xPosCircle, this.yPosCircle, this.width, this.height); 

    }
    

  

}