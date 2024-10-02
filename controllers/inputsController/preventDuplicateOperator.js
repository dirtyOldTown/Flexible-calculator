import { setOfOperatorsExists } from "../../middleware/setOfOperatorsHandler.js";
import { advancedOperators } from "../../config/setsOfOperators.js";

function preventDuplicateOperator(input, display) {
  let match = display.value.slice(-1);
  if (isNaN(match) && !setOfOperatorsExists(input, advancedOperators)) {
    if (isNaN(input) && !setOfOperatorsExists(match, advancedOperators)) {
      let expression = display.value.slice(0, -1);
      display.value = expression;
    } 
  } 
}

export { preventDuplicateOperator }