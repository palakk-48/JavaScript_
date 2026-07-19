function getMilk(amount, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy "+ calcBottles(amount,costPerBottle) + " bottles of milk");
  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(amount,costPerBottle);
}

function calcBottles(startingMoney, costPerBottle){
  var numOfBottles= Math.floor(startingMoney/costPerBottle);
  return numOfBottles;
}

function calcChange(startingMoney, costPerBottle){
  var change= startingMoney % costPerBottle;
  return change;
} 

console.log(" hello master, here is your "+ getMilk(5, 1.5) +" change");