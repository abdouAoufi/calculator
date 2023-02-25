// ! NUMBER BUTTONS ---------------------------------|
const zeroButton = document.getElementById("0-btn")
const oneButton = document.getElementById("1-btn")
const twoButton = document.getElementById("2-btn")
const threeButton = document.getElementById("3-btn")
const fourButton = document.getElementById("4-btn")
const fiveButton = document.getElementById("5-btn")
const sixButton = document.getElementById("6-btn")
const sevenButton = document.getElementById("7-btn")
const eightButton = document.getElementById("8-btn")
const nineButton = document.getElementById("9-btn");
// ! OPERATION BUTTONS -------------------------------|
const plusButton = document.getElementById("plus-btn")
const minusButton = document.getElementById("minus-btn")
const multiplyButton = document.getElementById("multiply-btn")
const divideButton = document.getElementById("division-btn")
// ! EXTRA BUTTON ------------------------------------|
const pointButton = document.getElementById("point-btn")
const resetButton = document.getElementById("reset-btn")
const equalButton = document.getElementById("equal-btn")
// ! -------------------------------------------------|
const screenCalculator = document.getElementById("screen-calculator")

const numberButtons = [zeroButton, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton];

let tempNumber = "";
let numberOne = 0;
let numberTwo = 0;


numberButtons.forEach(function (buttonElement, index) {
 buttonElement.addEventListener("click", function () {
  if (tempNumber.length <= 10) {
   tempNumber = tempNumber + index;
   screenCalculator.innerText = tempNumber;
  }
 })
});


plusButton.addEventListener("click", function () {
 numberOne = parseFloat(tempNumber);
 tempNumber = "0";
 screenCalculator.innerText = tempNumber;
})

equalButton.addEventListener("click", function () {
 numberTwo = parseFloat(tempNumber)
 let result = numberOne + numberTwo;
 screenCalculator.innerText = result
})