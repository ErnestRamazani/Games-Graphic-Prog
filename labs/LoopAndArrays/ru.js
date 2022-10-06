/*****************************************************
 Author: Ernest Ramazani 
 Date: 06 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
We will create a program that display the runner up from a array. 
To make that happen, we will create an array  that contains all of our number. 
After creating the array, we will create a loop that will print the runner up. To get the runner up, 
we will compare the first array with the secon, then the second to the third and so on. 
*******************************************************************************************************/

//Creating the array;
var myArray=[3,5,7]; 

//getting our two div id 
let output1 = document.getElementById("element1"); 
let output2 = document.getElementById("element2"); 

//Creating the loop 
for(var i=0; i<myArray.length; i++){

    //Making the condition to display runner up 
    if (myArray[i]<myArray[i+1]){
        output1.innerHTML = myArray[i]; 
        output2.innerHTML = myArray[i+1]; 
         
    }
}