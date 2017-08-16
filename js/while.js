var i = 2;

while (i < 65600) {
    console.log('while loop iteration #' + i);
    i = 2 * i;
}


/*An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell.
Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers./!**!/*/


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5


do {
    var cones = Math.floor(Math.random() * 5) + 1;
    console.log(cones + "cones purchased by each customer");
    allCones = allCones - cones;
    console.log(allCones);

} while (allCones > 5);

while (allCones > 0) {

    console.log(allCones + "we only have this many cones left");
    console.log("sorry you can only have 1 cone because we have less than 5 left");
    allCones = allCones - 1;
}

console.log("we are out of cones son please go home");


/* DO WHILE EXAMPLE ///////////////////////// */

/*var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);*/


