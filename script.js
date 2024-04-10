"Use Strict";

let display = document.querySelector(".display");

let num1;
let num2;
let operator;
let displayValue = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(number1, operator, number2) {
  if (operator === "+") {
    num1 = add(parseInt(number1), parseInt(number2));
    display.innerHTML = num1;
    resetNumber();
  } else if (operator === "-") {
    num1 = subtract(number1, number2);
    display.innerHTML = num1;
    resetNumber();
  } else if (operator === "x") {
    num1 = multiply(number1, number2);
    display.innerHTML = num1;
    resetNumber();
  } else if (operator === "/") {
    num1 = divide(number1, number2);
    display.innerHTML = num1;
    resetNumber();
  }
}

addEventListener("click", function (event) {
  //If an operand is selected. Run this logic
  if (event.target.classList.contains("operand")) {
    operandClicked(event);
  } else if (event.target.classList.contains("equals")) {
    equalsClicked();
  } else if (event.target.classList.contains("clear")) {
    clearClicked();
  } else if (event.target.tagName === "BUTTON") {
    buttonClicked(event);
  }
});

// = means operate() runs, only if num1 is present and displayValue is not null.
// any amount of numbers are concat into num1 when an operand is selected.
// when num2 is assigned a number, a calculation is run, whether it is with "=" or from an operand.
// Each time an operand is selected, the displayValue gets placed into num1 or num2.
// When num1 has a value, the "=" will work, otherwise it does nothing.

function clearClicked() {
  console.log("clear");
  display.textContent = "0";
  num1 = null;
  num2 = null;
  operator = null;
  displayValue = "";
}

function equalsClicked() {
  num2 = displayValue;
  if (num1 && operator && num2) {
    operate(num1, operator, num2);
  }
}

function operandClicked(event) {
  operator = event.target.textContent;
  console.log(operator);
  console.log("num1: " + num1);
  if (num1) {
    num2 = displayValue;
    console.log("num2: " + num2);
    operate(num1, operator, num2);
  } else {
    num1 = displayValue;
    displayValue = "";
  }
}

function buttonClicked(event) {
  displayValue += event.target.textContent;
  display.textContent = displayValue;
}

function resetNumber() {
  num2 = "";
  displayValue = "";
}
