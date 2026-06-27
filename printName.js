var name= prompt("Enter your name");
var newName= (name.slice(0,1).toUpperCase())+ (name.slice(1,(name.length)).toLowerCase());

alert("Hello, "+ newName);