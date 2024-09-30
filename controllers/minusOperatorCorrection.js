import { setOfOperatorsExists } from "../middleware/operatorsHandler.js";
import { advancedOperators } from "../config/setsOfOperators.js";

function minusOperatorCorrection(display) {
  let test = display.value;
  if (test.length == 1 && isNaN(test) && !setOfOperatorsExists(test, advancedOperators)) {
    display.value = "-";
  }
}


export { minusOperatorCorrection }