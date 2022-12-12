/*****************************************************
 Author: Ernest Ramazani 
 Date: 12 Decemebr, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to create 9 buttons that change the color a a div 
whenever a button there are clicked on. 

*******************************************************************************************************/

/*********************
 CODES
 *********************/



var rColor = 0; 
var bColor=0; 
var gColor=0; 

 function addRedColor(myId){
    var redPlus = document.getElementById(myId.id); 
    var ans=document.getElementById("red"); 
  
    var squareRgbNew =parseInt(redPlus.dataset.color); 
     rColor= rColor+squareRgbNew; 
 
    ans.innerHTML = rColor; 
 }
 function addGreenColor(myId){
    var redPlus = document.getElementById(myId.id); 
    var ans=document.getElementById("blue"); 
   
    var squareRgbNew =parseInt(redPlus.dataset.color); 
     bColor= bColor+squareRgbNew; 
 
    ans.innerHTML = bColor; 
 }

 function addBlueColor(myId){
    var redPlus = document.getElementById(myId.id); 
    var ans=document.getElementById("green"); 
    //ans.innerHTML=redPlus.dataset.color; 
    
    var squareRgbNew =parseInt(redPlus.dataset.color); 
     gColor= gColor+squareRgbNew; 
 
    ans.innerHTML = gColor; 
 }
