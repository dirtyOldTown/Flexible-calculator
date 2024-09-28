function firstInputHandler(target, input, len, display) {
    if (target.classList.contains("first-input-invisible")) {
      return;
    }
    if (len == 0 && (input == "0" || input == ".")) {
      display.value = "0.";
    } else {
       display.value += input;
    }
  }

  export { firstInputHandler }