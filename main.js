import { firstInputHandler } from "./controllers/inputsController/firstInputHandler.js";
import { preventDuplicateOperator } from "./controllers/inputsController/preventDuplicateOperator.js";
import { minusOperatorCorrection } from "./controllers/inputsController/minusOperatorCorrection.js";
import { deleteIrregularOperator } from "./controllers/inputsController/deleteIrregularOperators.js";
import { ALL_CLEAR, CLEAR, EQUAL, MULTIPLY, PI, E } from "./config/operatorsAndConstants.js";
import { advancedOperatorsAndConstants, classicOperators } from "./config/setsOfOperatorsAndConstants.js";
import { calculate } from "./controllers/calculationController/calculate.js";

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
  let len = display.value.length;
  
  // Enable the expression to be inside the display panel
  if (len > 21) return;

  // Prepare expression for calculation (Automatic correction of most errors in the expression)
  if (len == 0) {
    firstInputHandler(target, input, display);
  } else {
    preventDuplicateOperator(input, display);
    deleteIrregularOperator(input, display, advancedOperatorsAndConstants, classicOperators);
  }

  minusOperatorCorrection(display);

  // Expression for calculation
  currentExpression = display.value;
  console.log(currentExpression)
});

// Prepare expression befor calculation
keypad.addEventListener("mouseup", () => {
  replaceStringWithOperatorOrConstant(MULTIPLY.textContent, "*");
  replaceStringWithOperatorOrConstant(PI.textContent, Math.PI);
  replaceStringWithOperatorOrConstant(E.textContent, Math.E);
});

function replaceStringWithOperatorOrConstant(str, replacement) {
  let arrayOfExpression = currentExpression.split("");
  arrayOfExpression.forEach((value, index, arr) => {
    if (value.includes(str)) {
      arr[index] = replacement;
    }
});
  currentExpression = arrayOfExpression.join("");
}

// Calculation
EQUAL.addEventListener("click", () => {
  calculate(display, currentExpression)
});

// Clearing
ALL_CLEAR.addEventListener("click", () => {
  display.value = "";
});

CLEAR.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

