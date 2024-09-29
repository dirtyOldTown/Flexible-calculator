import { firstInputHandler } from "./controllers/firstInputHandler.js";
import { preventDuplicateOperator } from "./controllers/preventDuplicateOperator.js";
import { minusOperatorCorrection } from "./controllers/minusOperatorCorrection.js";

document.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

let keypad = document.querySelector(".keypad");
let display = document.querySelector(".calculation-container > input");
let currentExpression = "";

keypad.addEventListener("click", (e) => {
  let target = e.target.closest(".number, .operator.visible");
  if (!target) return;
  let input = target.textContent;
  let len = display.value.length;
  if (len == 0) {
    firstInputHandler(target, input, len, display);
  } else {
    preventDuplicateOperator(input, display);
    display.value += input;
  }
  minusOperatorCorrection(display);
});


