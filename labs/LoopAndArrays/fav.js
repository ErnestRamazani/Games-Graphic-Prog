/*****************************************************
 Author: Ernest Ramazani 
 Date: 06 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
We will create a program that display X "is my favorite this". 
To make that happen, we will create an array  that contains all of our X strings. 
After creating the array, we will create a loop that will print all element of the array  and append the text "is my favorite thing"
*******************************************************************************************************/

/*********************
 CODES
 *********************/

//Creating the string array 
var myArray = ["Zbrush", "Unreal Engine 5","BasketBall", "God of War", "Naruto"];

//getting the div id 
var output=document.getElementById("element1"); 

//loop that will display string from the array 
for(var i=0; i<myArray.length;i++){

    //Displayingthe loop + the text
    output.innerHTML += myArray[i] + ", is my favorite thing"+ "<br>"; 
}