import { setOfOperatorsExists } from "../../middleware/setOfOperatorsHandler.js";
import { deleteDecimalPoint } from "../../middleware/deleteDecimalPoint.js";
import { roots, classicOperators } from "../../config/setsOfOperatorsAndConstants.js";
function deleteIrregularOperator(input, display, arr) {
    let match = display.value.slice(-1);
    if (isNaN(match) && setOfOperatorsExists(match, arr)) {
      deleteDecimalPoint(input, display);
    } 
    else {
      display.value += input;
    }
    deleteOperatorAfterRootOrLeftBracket(input, match, display)
  }

function deleteOperatorAfterRootOrLeftBracket(input, match, display) {
  if (isNaN(match) && (setOfOperatorsExists(match, roots) || match.includes("("))
    && (setOfOperatorsExists(input, classicOperators) || input == ")")) {
    display.value = display.value.slice(0, -1);
  }
}



export { deleteIrregularOperator }