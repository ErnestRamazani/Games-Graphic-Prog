/*****************************************************
 Author: Ernest Ramazani 
 Date: 03 November, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a web page that generates a random number between 0 and 10
The algorithm would be to create a button to click on to generate and display the number on the webpage  
The number will be generated using the javascript method math.random from math.floor
*******************************************************************************************************/

/*********************
 CODES
 *********************/

//Function that create a random number. Takes one argument 
 function randomNum(num){

    //returning the random number generated 
    return Math.floor(Math.random()*num)
}

//function when the button is clicked 
function buttonClicked(){

    //This variable defines the max range (0-10) of the number to be generated 
    var num = 10; 

    //Printing on the webpage the number generated after calling back the function randomNum
    document.getElementById("random").innerHTML ="The random number is: "+ randomNum(num); 
}