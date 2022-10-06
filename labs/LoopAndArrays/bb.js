/*****************************************************
 Author: Ernest Ramazani 
 Date: 06 October, 2022
 IUPUI // NEWM N220 Fall 2022
 ****************************************************/

/******************************************************************************************************
 Algorithm 
 ---------
We need to create a program that print beep when a number is divisible by 3, bop for 5 and beepboop for 3 and 5 . 
We will first create a loop that create 25 numbers. After creating the loop, we will make 4 conditions with the index of that loop
if the index modulo 3 = 0 and index modulo 5 =0, we display on the web  page beebop. We do the same thing for %3 and %5 
The last condition will be to display the number if the above cnoditions are not met 
*******************************************************************************************************/

/*********************
 CODES
 *********************/

 //getting the div id 
 let output = document.getElementById("element1"); 

 //creating a loop to display numbers 
for(var i =1; i<=25; i++){

    //condition and displaying the result to the web page 
    if (i%3==0 && i%5==0){
        output.innerHTML += "beepbop"+"<br>"; 
    }else if(i%5==0){
        output.innerHTML += "bop"+"<br>"; 
    }else if(i%3==0 ){
        output.innerHTML += "beep"+"<br>"; 
    }else{
        output.innerHTML += i+"<br>"; 
    }
    
}
