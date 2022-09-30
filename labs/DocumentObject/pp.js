/*****************************************************
 Author: Ernest Ramazani 
 Date: September29, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
 First we create a div with an id and an onclick
 The function will resize the  square created with css. 

*******************************************************************************************************/

/*********************
 CODES
 *********************/
function largeSquare(){
//getting the div id 
    var square = document.getElementById('square'); 

//Resizing the square 
    square.style.width = square.offsetWidth + (0.1 * square.offsetWidth)+"px";
    square.style.height = square.offsetHeight + (0.1 * square.offsetHeight)+"px";
  
}