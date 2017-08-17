"use strict";


var numberSelect = prompt("please enter a number between 1 and 10");

if (numberSelect > 10) {
    alert("you put in a number greater than 10 please try again");
    numberSelect = "stop";
}
else if (numberSelect < 0) {
    alert("you put in a negative number so quit it");
    numberSelect = "stop";
}
else if (isNaN(numberSelect)) {
    alert("you didn't put in a number");
    numberSelect = "stop";
}

for (var i = 0; i < 11; i++) {
    if (numberSelect = 1) {
        break;
    }
    console.log(i);
    console.log(numberSelect);
    console.log("Times table using the number " + numberSelect);
    console.log(numberSelect + "x" + i + "=" + numberSelect * i);

}


/*
Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:*/


/*
/!* ----------- ANOTHER EXAMPLE OF FOR LOOP *!/ -----------------

for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}

/!* ----------- ANOTHER EXAMPLE OF FOR LOOP *!/ -----------------

    for (var i = 1; i < 100; i++) {

        if (i % 2 !== 0) {
            // number isn't even
            // odd numbers aren't as cool
            // skip the rest of the loop and continue with the next iteration
            continue;
        }

        console.log('Here is a lovely even number: ' + i);
    }*/
