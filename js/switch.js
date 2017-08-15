"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.


    case
    "red"
    :
        alert("yep it's red");
        break;

    case
    "blue"
    :
        alert("yep it's blue");
        break;

    case
    "red"
    :
        alert("yep it's orange");
        break;

    case
    "indigo"
    :
        alert("yep it's indigo");
        break;

    case
    "yellow"
    :
        alert("mellow yellow it is!");
        break;

    default:
        alert(color + " isn't my favorite, but IT'S THE ONE RANDOMLY GENERATED");
        break;
}
/*

var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}*/
