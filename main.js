import { firstInputHandler } from "./controllers/inputsController/firstInputHandler.js";
import { preventDuplicateOperator } from "./controllers/inputsController/preventDuplicateOperator.js";
import { minusOperatorCorrection } from "./controllers/inputsController/minusOperatorCorrection.js";
import { deleteIrregularOperator } from "./controllers/inputsController/deleteIrregularOperators.js";
import { ALL_CLEAR, CLEAR } from "./config/operatorsAndConstants.js";
import { advancedOperators, classicOperators } from "./config/setsOfOperatorsAndConstants.js";

document.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

let keypad = document.querySelector(".keypad");
let display = document.querySelector(".calculation-container > input");
let currentExpression = 0;

keypad.addEventListener("mousedown", (e) => {
  let target = e.target.closest(".number, .operator.visible");
  if (!target) return;
  let input = target.textContent;

  // Prepare expression for calculation (Automatic correction of most errors in the expression)
  let len = display.value.length;
  if (len == 0) {
    firstInputHandler(target, input, display);
  } else {
    preventDuplicateOperator(input, display);
    deleteIrregularOperator(input, display, advancedOperators, classicOperators);
  }

  minusOperatorCorrection(display);
  
  // Expression for calculation
  currentExpression = display.value;
  console.log(currentExpression);
});

// Clearing
ALL_CLEAR.addEventListener("click", () => {
  display.value = "";
});

CLEAR.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

