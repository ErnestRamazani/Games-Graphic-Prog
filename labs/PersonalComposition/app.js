
// funtion that create a canvas 

function setup(){
    createCanvas(800,600); 
    

}

//function to draw on the canvas

function draw(){

//Defining variables 
    var color1 = color(168, 196, 227); 
    var yCoordinate= 300; 

//Making a background 
    background(color1);

 //Making main shaphes to create a final figure    
    rect(200,yCoordinate,400,yCoordinate);
    
    triangle(400, 100, 700, yCoordinate, 100, yCoordinate); 
    
    circle(400,200,30);
    
    arc(100, yCoordinate, 50, 50, 0, HALF_PI);
    arc(675, yCoordinate, 50, 50, 0, HALF_PI);
   
    rect(390,500,50,300); 
    
    line(200, yCoordinate,21,44,21); 
}