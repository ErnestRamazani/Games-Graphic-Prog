/*****************************************************
 Author: Ernest Ramazani 
 Date: 10 November, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a web page that look for that i fa certain word is inputed by the user 
The algorithm would be to create a input box for the user to write the the words separated by empty space
then create a button to click on forfor to display the result. We will have to create a loop that look for 
all the words and check if the the word exists. 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //functions for checking the word 
function userWords(userInput){
   //initializing the counter 
    let counter = 0; 
   
    //loop that goes through the array of words (user inputs)
    for(var i=0; i<userInput.length; i++){
        //conditions for checking the word
        if (userInput[i] !== "clear" && userInput[i] !== "water" && userInput[i] !== "tires"){
            document.getElementById("out").innerHTML="No bad words founded"; 
        } else if (userInput[i] == "clear" || userInput[i] == "water" || userInput[i] == "tires"){
            counter +=1; 

            document.getElementById("out").innerHTML="Bad words founded"; 
            document.getElementById("counter1").innerHTML="Number of bad words : "+counter; 

            
        }
    }
    //deleting all the value from the input box
    document.getElementById("input1").value=""; 
    }

    //function that is called when a button is clicked 
function badWords(){

    //getting the user inputs 
    var userInput = document.getElementById("input1").value;
     //separating the user input by space 
    var userInput = userInput.split(' '); 
  
     var userInputArray=[]; 
//loop that add user input into an array 
    for(var i=0; i<userInput.length;i++){
         userInputArray.push(userInput[i]); 
        
    }
   
//calling the checking word function
   userWords(userInputArray)
   

}