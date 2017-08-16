"use strict";

var numberSelect = prompt("please enter a number between 1 and 10");

for (var i = 0; i < 10 ; i++) {
    console.log(i);
    console.log(numberSelect);
    console.log("Times table using the number " + numberSelect);
    console.log(numberSelect + "x" + i + "=" + numberSelect*i);

}




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
