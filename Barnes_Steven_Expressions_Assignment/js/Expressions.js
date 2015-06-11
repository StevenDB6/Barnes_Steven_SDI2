/*
Steven Barnes
6/10/2015
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

//Calculate the weight of the plane with luggage removed

//Ask the user what is the weight of the plane with luggage loaded
var planeWeight = prompt (" What is the weight of the plane with luggage?");
console.log (planeWeight);

//Ask the user what is the weight of the luggage

var luggageWeight = prompt(" What is the weight of the luggage?");
console.log (luggageWeight);

//Find the weight of the without the luggage

//casting prompted values as numbers

totalWeight = Number(planeWeight) - Number(luggageWeight);

//Alert user the the total weight of the plane
alert(name+" the plane now weighs " +totalWeight+" pounds.");
console.log (totalWeight);

/*
I was able to calulate the weight of the plane whichn I chose
to be 5000 pounds.Then added the weight of the luggage which I chose to be 467 pounds and
the total weight came out to be 5467 pounds. I was also able to subtract 467 pounds from 5467 pounds and get the orignal weight
of the plane which was 5000 pounds.
 */

