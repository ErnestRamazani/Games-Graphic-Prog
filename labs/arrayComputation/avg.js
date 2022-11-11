/*****************************************************
 Author: Ernest Ramazani 
 Date: 10 November, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a web page that calculate the average of the user input
The algorithm would be to create a input box for the user to write the the number separated by commas
then create a button to click on forfor calculating the average. First thing will be to remove all the commas 
from the inputs. Then put all the number into an array, parse the number enterred into integer. 
With a loop, we will iterate over all number in order to sum them and divide it by the array length
*******************************************************************************************************/

/*********************
 CODES
 *********************/

//function that calculate the average 

function numEntered(userInput){
    //initializing the variable sum 
    let sum=0; 

    //Loop to through the array 
    for(var i=0; i<userInput.length; i++){
        //adding up all index of the array 
         sum += userInput[i];
    
         //printing the user input 
      
        document.getElementById("num").innerHTML += sum + " ";  
    }

    //calculating the average 
    var avg = sum/userInput.length; 

    //printing the average and the sum 
    document.getElementById("sum").innerHTML += sum; 
    document.getElementById("avg").innerHTML += avg;
    document.getElementById("input1").value=""; 
    return userInput; 
}

//function that i called when the button is clicked 
function average(){
    //getting the html element 
    var userInput = document.getElementById("input1").value; 
    //removing the commas 
    var userInput = userInput.split(','); 
     var userInputArray=[]; 
   
     //loop that push all the inputs into an array and parsing them into integers 
    for(var i=0; i<userInput.length;i++){
         userInputArray.push(parseInt(userInput[i])); 
    }
    
    //calling the fucntion that calculate the average 
    numEntered(userInputArray); 

}

