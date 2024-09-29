import { setOfOperatorsExists } from "../middleware/operatorsHandler.js";
import { advancedOperators } from "../config/setsOfOperators.js";

function preventDuplicateOperator(input, display) {
    let match = display.value.slice(-1);
    if (isNaN(match) && !setOfOperatorsExists(input, advancedOperators)) {
     let expression = display.value.slice(0, -1);
      if (isNaN(input) && !setOfOperatorsExists(match, advancedOperators)) {
        display.value = expression;
      } 
    } 
    /*
    if ((advancedOperatorExists(match, advancedOperators) || advancedOperatorExists(match, classicOperators)) && input == ".") {
      display.value += "0"
    }
      */
  }

export { preventDuplicateOperator }