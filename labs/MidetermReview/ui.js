/*****************************************************
 Author: Ernest Ramazani 
 Date: 13 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a program that highlight, make the text bold and rewrite the text on top of the page 
when a certain button is clicked
To make it possible, we will create 6 div our clicks but all the click will be the same function. 
On js, we will create our duntion thta take one argument. This function must contains all the click. 
We will have to assign the click to the parameter created so that we can highlight, make the text bold
*******************************************************************************************************/

/*********************
 CODES
 *********************/


//function taking one parameter 
function myFunction(myId){

    //creating a variable that get the id and get all the div element at once 
    var myColor = document.getElementById("buttons").getElementsByTagName("div"); 
    var myText = document.getElementById('text'); 

    //Loop to refresh element of the page each time there is another click 
    for (var i = 0; i<myColor.length; i++){

        //reseting the background color to Null and the font to normal 
        myColor[i].style.backgroundColor="";
        myColor[i].style.fontWeight = "normal"; 
            
    }

        //highlighting the background and makingthe text bold
        document.getElementById(myId).style.backgroundColor = 'beige'; 
        document.getElementById(myId).style.fontWeight = 'bold'; 
        
        //Printing the text on top of the page whenever a div is clicked 
        //We assign a specific div id to the function parameter 
        if(document.getElementById(myId)==document.getElementById("word1")){
            myText+=myText.innerHTML = "APPLE"; 
        }else if(document.getElementById(myId)==document.getElementById("word2")){
            myText+=myText.innerHTML = "BANANA"; 
        }else if(document.getElementById(myId)==document.getElementById("word3")){
            myText+=myText.innerHTML = "GRAPE"; 
        }else if(document.getElementById(myId)==document.getElementById("word4")){
            myText+=myText.innerHTML = "BLUEBERRY"; 
        }else if(document.getElementById(myId)==document.getElementById("word5")){
            myText+=myText.innerHTML = "LIME"; 
        }else if(document.getElementById(myId)==document.getElementById("word6")){
            myText+=myText.innerHTML = "PEACH"; 
        }
      
}