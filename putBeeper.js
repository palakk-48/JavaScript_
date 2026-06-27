
// Stanford Karel IDE program-free space
// to write any program.
// link: https://stanford.edu/~cpiech/karel/ide.html
 
// creating the chessboard pattern

// solution 1
 function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}

function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}

function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}

function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}

function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

// solution 2
/**
function main(){

moveBeeper2();
turnLeft();
moveBeeper1();
turnRight();
move();
turnRight();
moveBeeper2();
turnLeft();
moveBeeper1();
turnRight();
move();
turnRight();
moveBeeper2();
}

function moveBeeper2(){
putBeeper();
move();
move();
putBeeper();
move();
move();
putBeeper();
}

function moveBeeper1(){
move();
turnLeft();
move();
putBeeper();
move();
move();
putBeeper();
move();

}
**/


