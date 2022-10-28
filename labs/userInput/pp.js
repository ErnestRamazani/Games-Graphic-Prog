/*****************************************************
 Author: Ernest Ramazani 
 Date: 27 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
We are asked to make a web page that take the username and password and print sucess if they are correct  
The algorithm would be to create 2 input boxes for the username and password
If the username and the password are correct, we will output Success, else we will output wrong information
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //Telling the user what are the username and the password
var infoUser = alert("The username is 'Username' and the password is 'Password'")

//getting the html button and creating the function for the click
document.getElementById('ele2').onclick = function(){

    //getting the html element for the 2 inputs 
    var userName = document.getElementById('myInput1').value; 
    var password = document.getElementById('myInput2').value; 

    // setting the variables username and password equal to username 
    //and password 
    //condition to check if they are true
    if(userName=="Username" && password=="Password"){

        //outputting the result 
        console.log("Success"); 
        document.getElementById("ele").innerHTML = "Success"; 
    }else{

          //outputting the result 
        console.log("Wrong Information"); 
        document.getElementById("ele").innerHTML = "Wrong Information"; 
    }
   
}

