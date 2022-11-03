/*****************************************************
 Author: Ernest Ramazani 
 Date: 03 November, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a web page that remove the character "#" from the user input 
The algorithm would be to create a input box for the user to write the word
then create a button to click on for removing the # from the word. To remove the #, we wiil 
create a loop that search for the # in the word, then replace it with an empty space. 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //Function that remove the # from the word. This function takes one argument 
function myWord(userInput){
  
    //Loop to search in the word 
    for(var i=0; i<=userInput.length; i++){

        //removing the #
        userInput = userInput.replaceAll('#',''); 
    }
    //returning the word without the #
   return userInput; 

   
}

//Function when the button is clicked 
function buttonClicked(){

    //Getting the value of the user input 
    userInput = document.getElementById("input1").value; 

    //Printing the new word by calling back the function 
    document.getElementById("word").innerHTML = "The clean version is: " + myWord(userInput)
}