/*
Steven Barnes
6/3/2015
Section 02
 */
//Test to see if connected
console.log("Test");

// Create a weight calculator

// Ask the user what is their name
var name = prompt("What is your name")

// console.log the name to check it
console.log (name)

// Alert the user welcome
alert(" Welcome " + name+" Let's see how much your airplane weighs");

//Ask the user what is the weight of the plane
var planeWeight = prompt (" How much does your plane weigh?");
console.log (planeWeight);

//Calculate the weight of the luggage
var luggageWeight = prompt("How much does the luggage weigh?");
console.log (luggageWeight);

// Calculate the total weight of the plane
//Casting prompted values as numbers

totalWeight = Number(planeWeight) + Number(luggageWeight);

//Alert the user the total weight
alert(name+" the plane weighs " +totalWeight+" pounds.");
console.log (totalWeight);