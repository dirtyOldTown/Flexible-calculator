import { setOfOperatorsExists } from "../../middleware/setOfOperatorsHandler.js";
import { advancedOperatorsAndConstants } from "../../config/setsOfOperatorsAndConstants.js";

function minusOperatorCorrection(display) {
  let test = display.value;
  if (test.length == 1 && isNaN(test) && !setOfOperatorsExists(test, advancedOperatorsAndConstants)) {
    display.value = "-";
  }
}

export { minusOperatorCorrection }