function lifeInWeeks(age){
    var years = 90-age;
    var months = years*12;
    var weeks = years*52;
    var days = years* 365;

    console.log("You have "+days+ " days, "+ weeks+"weeks, and"+months+" months left." );
}

var age=prompt("Enter your age");
lifeInWeeks(age);



