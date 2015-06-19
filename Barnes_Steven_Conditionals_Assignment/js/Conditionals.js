 /*
 Steven Barnes
 Section 02
 6-18-2015
 Barnes_Steven_Conditionals_Assignment
 */

 // Test to see if connected
 console.log("Test");

 //create a conditional

 // Ask the user to pick a even number
 var evenNumber = prompt(" Pick a even number between 1 and 20");
 console.log (evenNumber)

 // ask the user to choose an odd number
 var oddNumber = prompt(" Pick a odd number between 1 and 20 ");
 console.log(oddNumber)

 if( Number(evenNumber) < Number(oddNumber)){
  //code will run if true
  console.log(evenNumber+" is less than " +oddNumber);
 } else{
  console.log( evenNumber+ " is not less then " +oddNumber);
 }

 if( Number(evenNumber) > Number(oddNumber)){
  //code will run if true
  console.log(evenNumber+" is greater than " +oddNumber);
 } else{
  console.log( evenNumber+ " is not greater then " +oddNumber);
 }
/*
I created a conditonal using any numbers between 1 and 20 odd or even to tell if they
are greater than or less than each other.
 */

// Ask user what does X equal
 var X = prompt (" X equals?");

 // Ask user what does Y equal
 var Y = prompt(" Y equals?");

 //Create a logical operator

var XY =prompt(X < Y && Y > X);

/*
I was able to use any two numbers from the first code and place them in my logic to have
either a true or false statement.
 */
