/*****************************************************
 Author: Ernest Ramazani 
 Date: 27 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a web page that take the user input, calculate the tip and return the total 
The algorithm would be to create a input box for the user to write the price 
then we will parse the string into integer then calucate the tip which will be set at 20%
Finally, we will add the tip to the initial price to get the total
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //getting the html button and creating the function for the click
document.getElementById('ele2').onclick = function(){

     //getting the user input
    var resultOutput = document.getElementById('ele1').value; 
    //parsing the string to integer
    resultOutput = parseInt(resultOutput); 

    //Calculating the tip 
    var tip = (20*resultOutput)/100; 
    //Calcualting the total 
    var total = tip + resultOutput; 

    //printing the the tip and the total to the console and web page 
    console.log("Tip: $"+tip+ ".    Total: $" +total); 
    document.getElementById("ele").innerHTML = "Tip: $"+tip+ "<br> "   + "Total: $" +total; 
}


