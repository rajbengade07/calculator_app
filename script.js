const display = document.getElementById("display");

  function append(char) {
    display.value += char;
  }

  function clearDisplay() {
    display.value = "";
  }

  function calculate() {
    display.value = eval(display.value); // Just directly evaluate
  }