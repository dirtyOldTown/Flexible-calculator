function preventIrregularFirstInput(input, target, display) {
  if (target.classList.contains("first-input-invisible")) {
    return;
  }
  if (input == "0" || input == ".") {
    display.value = "0.";
  }
}

export { preventIrregularFirstInput }