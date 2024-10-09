function firstInputHandler(target, input, display) {
    if (target.classList.contains("first-input-invisible")) {
      return;
    }
    // Preventing error at the start
    addSpecificExpression(input, display);
  }

function addSpecificExpression(input, display) {
  if (input == "." || input == "0") {
    display.value = "0.";
  } else {
     display.value += input;
  }
}

export { firstInputHandler }