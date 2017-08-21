(function() {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = 0;

    // TODO: Convert planetsString to an array, save it to planetsArray.

    console.log(planetsString);

    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    var arrayBreaks = planetsArray.join("<br>");

    console.log(arrayBreaks);


    var arrayBreaks = planetsArray.join("<li>");

    document.write("<h1>><ul>);
    document.write("<li>" + arrayBreaks + "</li>");
    document.write("</ul></h1>");

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    /*

    var namesString = namesArray.join(',');

    */

})();
