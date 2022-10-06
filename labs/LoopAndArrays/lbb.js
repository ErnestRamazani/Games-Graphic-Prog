/*****************************************************
 Author: Ernest Ramazani 
 Date: 06 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
We will create a program that display number from a array. 
To make that happen, we will create an array  that contains all of our number. 
After creating the array, we will create a loop that will print all element of the array 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

//Creating array 
let myArray=[1000, 2000, 3000, 4000, 5000]; 

//getting the div id 
let output = document.getElementById("element1"); 

//loop that will display the index of the array 
for(var i =0; i<myArray.length; i++){

     //Displaying the index
    output.innerHTML += myArray[i] + "<br>"; 
}
