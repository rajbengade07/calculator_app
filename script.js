// script.js - Simple, Clear & Mobile-Like Calculator

const display = document.getElementById("display");

// This function runs when any button is clicked
function append(value) {
  const lastChar = display.value.slice(-1);
  const operators = ['+', '-', '*', '/'];

  // If the clicked value is an operator
  if (operators.includes(value)) {
    // If there's no number before, do nothing
    if (display.value === '') return;

    // If last character is also an operator, replace it
    if (operators.includes(lastChar)) {
      display.value = display.value.slice(0, -1) + value;
      return;
    }
  }

  // Only one decimal per number allowed
  if (value === '.' && lastNumberHasDot()) return;

  // Add value to display
  display.value += value;
}

// Check if last number already contains a dot
function lastNumberHasDot() {
  const numbers = display.value.split(/[+\-*/]/); // split at operators
  const lastNum = numbers[numbers.length - 1];
  return lastNum.includes('.');
}

// Clear the screen
function clearDisplay() {
  display.value = "";
}

// Calculate and show the result
function calculate() {
  try {
    display.value = eval(display.value); // Safe for controlled input
  } catch (err) {
    alert("Invalid input");
    display.value = "";
  }
}
