import { firstInputHandler } from "./controllers/inputsController/firstInputHandler.js";
import { preventDuplicateOperator } from "./controllers/inputsController/preventDuplicateOperator.js";
import { minusOperatorCorrection } from "./controllers/inputsController/minusOperatorCorrection.js";
import { deleteIrregularOperator } from "./controllers/inputsController/deleteIrregularOperators.js";
import { preventIrregularNumber } from "./controllers/inputsController/preventIrregularNumber.js";
import { ALL_CLEAR, CLEAR, EQUAL, MULTIPLY, PI, E, PERCENT } from "./config/operatorsAndConstants.js";
import { MEMORY_CLEAR, MEMORY_REVOKE, MEMORY_PLUS, MEMORY_MINUS } from "./config/operatorsAndConstants.js";
import { numbers, advancedOperatorsAndConstants, classicOperators, specificOperatorsAndConstant, rootsAndConstants } from "./config/setsOfOperatorsAndConstants.js";
import { calculate } from "./controllers/calculationController.js";
import { setOfOperatorsExists, setOfNumbersExists } from "./middleware/setOfOperatorsHandler.js";
import { memoryPlusHandler, memoryMinusHandler, clearMemory } from "./controllers/memoryController.js";
import { insertOperator } from "./middleware/insertOperator.js";

let keypad = document.querySelector(".keypad");
let display = document.querySelector(".calculation-container > input");
let memory = document.querySelector(".memory");
let memoryContent = document.querySelector(".memory-content");
let currentExpression = 0;

// Prevent default action on events
keypad.addEventListener("mousedown", (event) => {
  event.preventDefault();
});
memory.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

// Inputs controller
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
 preventIrregularNumber(display, currentExpression);

  // Expression for calculation
  currentExpression = display.value;

  insertOperatorIfItNotExist("*");
});

// Prepare expression befor calculation
keypad.addEventListener("mouseup", (e) => {
  let target = e.target.closest(".number, .operator.visible");
  if (!target) return;
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

function insertOperatorIfItNotExist(str) {
  let arrayOfExpression = currentExpression.split("");
  insertOperator(str, arrayOfExpression);
  currentExpression = arrayOfExpression.join("");
  console.log(currentExpression)
}

// Calculation
EQUAL.addEventListener("click", () => {
  calculate(display, currentExpression)
});

// Memory handlers
MEMORY_PLUS.addEventListener("click", () => {
  if (isNaN(display.value)) {
    alert("Please, first press '=' button, and then 'M+ button");
  } else {
    memoryPlusHandler(display);
  }
});

MEMORY_MINUS.addEventListener("click", () => {
  if (isNaN(display.value)) {
    alert("Please, first press '=' button, and then 'M- button");
  } else {
    memoryMinusHandler(display);
  }
});

MEMORY_CLEAR.addEventListener("click", clearMemory)

MEMORY_REVOKE.addEventListener("click", () => {
  let match = display.value.slice(-1);
  if (!setOfOperatorsExists(match, classicOperators)) {
    display.value += "+" + +memoryContent.textContent;
    currentExpression += "+" + +memoryContent.textContent;
  } else {
    display.value += +memoryContent.textContent;
    currentExpression += +memoryContent.textContent;
  }
});

// Clearing
ALL_CLEAR.addEventListener("click", () => {
  display.value = "";
});

CLEAR.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
  currentExpression = display.value;
  insertOperatorIfItNotExist("*");
  replaceStringWithOperatorOrConstant(MULTIPLY.textContent, "*");
  replaceStringWithOperatorOrConstant(PI.textContent, Math.PI);
  replaceStringWithOperatorOrConstant(E.textContent, Math.E);
});

// Percent operator handler
PERCENT.addEventListener("click", () => {
  let operand = display.value.slice(-1);
  let regexp = /\d?\.?\d+/g;
  if (setOfNumbersExists(operand, numbers)) {
    let match = display.value.match(regexp);
    let rationalNumber = match.at(-1);
    let expression = display.value.slice(0, -rationalNumber.length)
    let current = currentExpression.slice(0, -rationalNumber.length)
  
    display.value = expression + +rationalNumber / 100;
    currentExpression = current + +rationalNumber / 100;
  } else {
    console.log("The number to which this operator is applied must be a rational number");
    alert(`The number to which this operator is applied must be a rational number`);
  }
});

console.log()
