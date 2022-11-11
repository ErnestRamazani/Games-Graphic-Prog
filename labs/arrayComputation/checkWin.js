/*****************************************************
 Author: Ernest Ramazani 
 Date: 10 November, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a web page that create div on the page 
We will need to  create a loop that goes through an array and print all the div 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //function that create the div when a button is clicked 
function createDiv(){
let result = document.getElementById("out"); 
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   //loop to go through the array 
   for(var i=0; i<objects.length; i++){
    //creating the div element 
    let newDiv = document.createElement("div"); 
    //printing the object element on the screen 
    newDiv.innerHTML ="Color: " +objects[i].color + "   Height: " +objects[i].height+ "   Width: "+ objects[i].width; 
    result.appendChild(newDiv); 
   }
}