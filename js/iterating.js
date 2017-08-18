(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // TODO: Create a log statement that will log the number of elements in the names array.

    // TODO: Create log statements that will print each of the names array elements individually.
})();

/*(function(iteratingArray) {

    var names = ['fred', 'wilma', 'barney', 'pebbles'];

    console.log(names.length);

    console.log('The first name is: ' + names[0]);
    console.log('The second name is: ' + names[1]);
    console.log('The third name is: ' + names[2]);
    console.log('The fourth name is: ' + names[3]);
    

})();*/

(function(iteratingArray2) {

    var shapes = ['square', 'rectangle', 'circle', 'triangle'];

    shapes.forEach(function ( element, index, array) {

        console.log(index + 1 + " " + element);

     })

})();

