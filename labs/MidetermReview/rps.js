/*****************************************************
 Author: Ernest Ramazani 
 Date: 13 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a program that makes the game Rock Paper Scissor, user vs computer
print the winner and the score. 
To create this, we will need to create some div that we can click on it. 
We will first create an array that contains our rock paper scissor 
Them the computer will have to chose one of them. After chosing, we will have to assign clicks to 
some strrings as rock paper scissor. Then we will have to to equal the computer choice to the spring and print 
the winner. For the counter, we will have to either add one or substract to a variable created that initially 
had the value of 0. 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //Getting element form the id tag 
var myText = document.getElementById('ele1');
var myText2 = document.getElementById('ele2');
var myText3 = document.getElementById("score")

//Creating an aaray that contains choices for the computer to chose from 
var words = ['Rock','Paper','Scissor']; 

//Randomizing the computer choice and printing it on the screen 
var ran = words[Math.floor(Math.random()*words.length)]; 
myText+=myText.innerHTML = "The computer chose " +ran
     
//Funtion that control all the div, and clicks. 
//The functiontakes one parameter 
function myFunction(myId){
    //creating a variable that get the id and get all the div element at once 
    var myGame = document.getElementById("buttons").getElementsByTagName("div"); 
    var score  =0; //Setting the counter for the score at 0 

    //Loop to refresh element of the page each time there is another click 
    for (var i = 0; i<myGame.length; i++){
    
        //reseting the background color to Null and the font to normal  
     myGame[i].style.backgroundColor="";
     myGame[i].style.fontWeight = "normal"; 
            
    }
    
    //Cretaing the condition for the game 

    //The computer chose the first element of the array
    if(ran==words[0]){
        
        //We assign a specific div id to the function parameter
        //Meaning the user has clicked on the choice (div) rock
        if(document.getElementById(myId)==document.getElementById("rock")){
           
            //Printing the winner + the score 
            myText2+=myText2.innerHTML=("Tie")
            myText3.innerHTML="Score: "+score; 

        //We assign a specific div id to the function parameter
        //Meaning the user has clicked on the choice (div) paper 
        }else if(document.getElementById(myId)==document.getElementById("paper")){
        
            //Printing the winner + the score 
            myText2+=myText2.innerHTML=("Win")
            myText3.innerHTML="Score: "+score+1;


        //We assign a specific div id to the function parameter
        //Meaning the user has clicked on the choice (div) scissor   
        }else if(document.getElementById(myId)==document.getElementById("scissor")){
    //Printing the winner + the score 
            myText2+=myText2.innerHTML=("Lost")
            myText3.innerHTML="Score: "+score-1; 
        }

    //The computer chose the second element of the array 
    //The inner condition are the same as above, but still following the rules of the game
    }else if(ran==words[1]){
    
            if(document.getElementById(myId)==document.getElementById("rock")){
              
                myText2+=myText2.innerHTML=("Lost")
                myText3.innerHTML="Score: "+score-1; 
            }else if(document.getElementById(myId)==document.getElementById("paper")){
            
                myText2+=myText2.innerHTML=("Tie")
                myText3.innerHTML="Score: "+score; 
            }else if(document.getElementById(myId)==document.getElementById("scissor")){
     
                myText2+=myText2.innerHTML=("Won")
                myText3.innerHTML="Score: "+score+1; 
            }

    //The computer chose the third element of the array 
    //The inner condition are the same as above, but still following the rules of the game
    }else if(ran==words[2]){
          
            if(document.getElementById(myId)==document.getElementById("rock")){
              
                myText2+=myText2.innerHTML=("Won")
                myText3.innerHTML="Score: "+score+1; 
            }else if(document.getElementById(myId)==document.getElementById("paper")){
              
                myText2+=myText2.innerHTML=("Lost")
                myText3.innerHTML="Score: "+score-1; 
            }else if(document.getElementById(myId)==document.getElementById("scissor")){
               
                myText2+=myText2.innerHTML=("Tie")
                myText3.innerHTML=score; 
            }
        }
    
    document.getElementById(myId)==document.getElementById("guard")
    myText2+=myText2.innerHTML=("NaN")
 
    //highlighting the backgroynd and makingthe text bold
    document.getElementById(myId).style.backgroundColor = 'beige'; 
    document.getElementById(myId).style.fontWeight = 'bold'; 
      
}