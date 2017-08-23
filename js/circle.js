(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (radius) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var logged = (this.radius * this.radius)* Math.PI;
            return logged;
            // TODO: return the proper value
        },
        
        logInfo: function(doRounding){
            if(doRounding){
                var area = Math.round(this.getArea());
            }else{
                var area = this.getArea();
            }
            
            console.log("A circle with radius: " + this.radius + " has an Area of " + area);
        },

        roundedNum: function (radius) {

         var rounded = Math.round(circle.getArea(radius));
         return rounded;
        },

        sphereArea: function (radius) {

         var spherical = (Math.PI * this.radius * 3);
         return spherical;
        }


    };
    
    console.log ("All of the below calculations are done with the radius of " + circle.radius);
    console.log (">>>>>>>>>>>>>>>>>>>>>>>");
    console.log (circle.getArea() + " is the total area of the circle with a radius of " + circle.radius);
    // console.log (circle.roundedNum() + " is the rounded number of the circle " + circle.radius);
    circle.logInfo(true);
    console.log (circle.sphereArea() + "is the area of the sphere " + circle.radius);
    console.log ("--------------------------");


    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    console.log ("All of the below calculations are done with the radius of " + circle.radius);
    console.log (">>>>>>>>>>>>>>>>>>>>>>>");
    console.log (circle.getArea(circle.radius) + " is the total area of the circle with radius of " + circle.radius);
   /* console.log (circle.roundedNum(circle.radius) + " is the rounded number of the circle " + circle.radius);*/
    circle.logInfo(true);
    console.log (circle.sphereArea() + "is the area of the sphere " + circle.radius);

})();
