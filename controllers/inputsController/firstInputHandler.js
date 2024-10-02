function firstInputHandler(target, input, display) {
    if (target.classList.contains("first-input-invisible")) {
      return;
    }
    if (display.value.length == 0 && (input == "0" || input == ".")) {
      display.value = "0.";
    } else {
       display.value += input;
    }
  }

  export { firstInputHandler }