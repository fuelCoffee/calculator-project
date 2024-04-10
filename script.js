"Use Strict";

let display = document.querySelector(".display");

let num1;
let num2;
let operator;
let result;
let buttonText = "";

function add(num1, num2) {
  return (result = num1 + num2);
}

function subtract(num1, num2) {
  return (result = num1 - num2);
}

function multiply(num1, num2) {
  return (result = num1 * num2);
}

function divide(num1, num2) {
  return (result = num1 / num2);
}

function operate(num1, operator, num2) {
  if (operator == "+") {
    display.innerHTML = add(num1, num2);
  } else if (operator == "-") {
    display.innerHTML = subtract(num1, num2);
  } else if (operator == "*") {
    display.innerHTML = multiply(num1, num2);
  } else if (operator == "/") {
    display.innerHTML = divide(num1, num2);
  }
}

addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    buttonText += event.target.textContent;
    display.textContent = buttonText;
  }
});
