import { setOfOperatorsExists } from "../middleware/operatorsHandler.js";
import { deleteDecimalPoint } from "../middleware/deleteDecimalPoint.js";
import { roots, classicOperators } from "../config/setsOfOperators.js";
function deleteIrregularOperator(input, display, arr) {
    let match = display.value.slice(-1);
    if (isNaN(match) && setOfOperatorsExists(match, arr)) {
      deleteDecimalPoint(input, display);
    } 
    else {
      display.value += input;
    }
    deleteOperatorAfterRoots(input, match, display)
  }

function deleteOperatorAfterRoots(input, match, display) {
  if (isNaN(match) && setOfOperatorsExists(match, roots) 
    && (setOfOperatorsExists(input, classicOperators) || input == ")")) {
    display.value = display.value.slice(0, -1);
  }
}
  export { deleteIrregularOperator }