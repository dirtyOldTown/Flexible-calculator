import { setOfOperatorsExists } from "../../middleware/setOfOperatorsHandler.js";
import { advancedOperatorsAndConstants } from "../../config/setsOfOperatorsAndConstants.js";

function preventDuplicateOperator(input, display) {
  let match = display.value.slice(-1);
  if (isNaN(match) && !setOfOperatorsExists(input, advancedOperatorsAndConstants)) {
    if (isNaN(input) && !setOfOperatorsExists(match, advancedOperatorsAndConstants)) {
      let expression = display.value.slice(0, -1);
      display.value = expression;
    } 
  } 
}

export { preventDuplicateOperator }