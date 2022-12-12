/*****************************************************
 Author: Ernest Ramazani 
 Date: 12 Decemebr, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make 3 squares that change color whenever we click on them
First, we will need to create 3 div, for each square
Then we will assign different color ofr each div and create ids. 
In javascript, we will create a function that change color

*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //function that change color 
 //This function takes one argumets which is all the id 
function changeColor(myId){
    //getting the id 
    var myColor= document.getElementById(myId.id)
    //channging the color 
    myColor.style.backgroundColor=myColor.dataset.color; 
}