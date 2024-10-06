function firstInputHandler(target, input, display) {
    if (target.classList.contains("first-input-invisible")) {
      return;
    }
    // Preventing error at the start
    addSpecificExpression(input, display);
  }

function addSpecificExpression(input, display) {
  if (display.value.length == 0 && (input == "0" || input == ".")) {
    display.value = "0.";
  } else {
     display.value += input;
  }
}
  export { firstInputHandler }