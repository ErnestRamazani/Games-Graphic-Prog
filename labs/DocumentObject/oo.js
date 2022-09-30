/*****************************************************
 Author: Ernest Ramazani 
 Date: September 8th, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
  First we create a div with an id and an onmouseover and onmouseout 
  Then we create a square with css
 we will create 2 functions 
 the first function in js will change the color of the square in black when the mouse is  over the square  
 the second will change the square in blue while the mouse is not on the square 
*******************************************************************************************************/

/*********************
 CODES
 *********************/  

 //function that change the square on black 
function colorChange(){
//getting the div id 
    var square =document.getElementById('square'); 

//changing the color to black 
    square.style.backgroundColor = "#000000"; 
}

 //function that change the square on blue  
 
function colorChange2(){
//getting the div id 
    var square =document.getElementById('square'); 

//changing the color to blue 
    square.style.backgroundColor = "#0000FF"; 
}