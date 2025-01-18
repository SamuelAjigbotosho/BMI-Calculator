// Objective:
// Calculate Body Mass Index based on user input.
// Features:
// Input fields for weight and height.
// Display calculated BMI with a health category (e.g., Normal, Overweight).
// Instructions:
// Use <input> fields for weight and height with a button to calculate BMI.
// Write a JavaScript function to compute BMI using the formula (weight/height^2).
// Display the result in a <div> with appropriate CSS styling.

let weight = document.getElementById("weight");
let height = document.getElementById("height");
let bmiBtn = document.getElementById("BMIbtn");
let bmiResult = document.getElementById("bmiResult");
let resetBtn = document.getElementById("reset");

bmiBtn.addEventListener("click", (e) => {
  let BMI =
    Number.parseFloat(weight.value) / Number.parseFloat(height.value ** 2);
  BMI = +BMI.toFixed(1);

  if (weight.value == 0 || height.value == "") {
    bmiResult.textContent = `Please fill out the input fields with valid figures.`;
    bmiResult.style.color = "red";
  } else if (BMI < 18.5) {
    bmiResult.textContent = `Your BMI is ${BMI} kg per metre square. You are underweight.`;
  } else if (BMI > 18.5 && BMI <= 24.9) {
    bmiResult.textContent = `Your BMI is ${BMI} kg per metre square. Your weight is normal.`;
  } else if (BMI >= 25 && BMI <= 29.9) {
    bmiResult.textContent = `Your BMI is ${BMI} kg per metre square. You are overweight.`;
  } else {
    bmiResult.textContent = `Your BMI is ${BMI} kg per metre square. You are OBESE!.`;
  }
  return BMI;
});

resetBtn.addEventListener("click", (e) => {
  weight.value = "";
  height.value = "";
  bmiResult.textContent = "";
});
