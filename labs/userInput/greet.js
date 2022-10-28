/*****************************************************
 Author: Ernest Ramazani 
 Date: 27 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a web page that take the user name and greet him 
The algorithm would be to create a input box for the user to wirite his name
then create a button to click on for greeting the user. To greet the user, 
we will create a string variable that we will add the user input 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //getting the html button and creating the function for the click
document.getElementById('ele2').onclick = function(){

    //getting the user input
    var resultOutput = document.getElementById('ele1').value; 

    //printing the greeting to the console and web page 
    console.log("Hello "+resultOutput)
    document.getElementById("ele").innerHTML = "Hello "+resultOutput; 
}


