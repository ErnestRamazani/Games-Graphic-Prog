/*****************************************************
 Author: Ernest Ramazani 
 Date: 03 November, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a web page that take the user inputed number  and tells him if the number is divisible by 7 
The algorithm would be to create a input box for the user to the number
then create a button to click on for tellingthe user if the nbumber is divisible by 7. 
The number will be divisible by 7 is its modulo 7 is equal to 0 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //Function that check if the number is divisible by 7, this fucntion takes one argument
function isDiv(userInput){
    //returning true or false if the % 7 ==0 or else 
    if (userInput % 7 ==0){
        return true; 
    }else{
      return false; 
    }
}

//function when the button is clicked 
function buttonClicked(){
    //Getting the user inout value
    var userInput = document.getElementById("input1").value;

    //Parsing the string into integer 
    userInput = parseInt(userInput);

    //If the function called return true, print on the page that the number is divisible by 7
    if(isDiv(userInput)==true){
       document.getElementById("output").innerHTML = "The Number is Divisible by 7";

       //If the function called return true, print on the page that the number is NOT divisible by 7
    }else{
        document.getElementById("output").innerHTML = "The Number is NOT Divisible by 7"; 
    }
}

