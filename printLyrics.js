 var numberOfBottles = 99;

 while (numberOfBottles >=1) {
    var bottleWord = "bottles";

    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }
 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord + " of beer.");
    console.log("Take one down and pass it around, " + (numberOfBottles - 1) + " " + bottleWord + " of beer on the wall.");
    numberOfBottles--;
    
}