/*****************************************************
 Author: Ernest Ramazani 
 Date: 12 Decemebr, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to create button that act as reposnse to a question
To make this, we will need to create 3 buttons and 1 div that will 
display if the answer is correct 
In javascipt, we will create a function that is called when a button is clicked
*******************************************************************************************************/

/*********************
 CODES
 *********************/


 //function that display of the anwser is correct 
 //this function takes one argument 
 //this function is called when the button ic clicked 
function flashCard(myId){
//getting all the id 
   var resp= document.getElementById(myId.id); 
   var ans=document.getElementById("answer"); 
   //printing the answer
   ans.innerHTML=resp.dataset.answer; 
}