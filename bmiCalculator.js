function bmiCalculate(weight, height){
    var bmi= weight/ (height*height);
    return Math.round(bmi);
}

var bmi= bmiCalculate(65, 1.8);
console.log("Your BMI is: "+ bmi);