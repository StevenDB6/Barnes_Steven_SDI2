/*
 Steven Barnes
 Section 02
 6-25-2015
 Barnes_Steven_Functions_Assignment
 */

// Testing to see if connected
console.log("Test");

// Create a file that will find the perimeter of a rectangle

var rectanglePerimeter= prompt(" Lets find the perimeter of a rectangle.");

// Ask user what is the length of the rectangle
var rectangleLength= prompt(" What is the length?")

//validate the length of the rectangle
while(rectangleLength==="" || isNaN(rectangleLength)){
        rectangleLength = prompt(" Please do not leave blank and only use numbers." +
            "\nWhat is the length?");
    }

// Ask the user what is the width of the rectangle
var rectangleWidth= prompt(" What is the width ");

//validate the width of the rectangle
while(rectangleWidth==="" || isNaN(rectangleWidth)){
    rectangleWidth = prompt(" Please do not leave blank and only use numbers.\n" +
        " What is the width?")
}

