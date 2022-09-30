/*****************************************************
 Author: Ernest Ramazani 
 Date: September 28, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
To make a function that append an element to a div, we need to first create a div in HTML
the div must have an id and an onclick that have a function
We will create a variable in the fucntion that get the id from the div 
Then we will modify the div with the innerHTML
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 function mc(){

// getting the id
    var div = document.getElementById('element1');

//appending to the div
    div.innerHTML += 'mc';
}
