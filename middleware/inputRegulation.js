import { rootsAndConstants, numbers, constants, specificOperatorsAndConstant } from "../config/setsOfOperatorsAndConstants.js";
import { setOfOperatorsExists } from "./setOfOperatorsHandler.js";
import { SQUARE_ROOT, CUBE_ROOT, PI, E } from "../config/operatorsAndConstants.js";
function inputRegulation(str, value, index, arr) {
  if (setOfOperatorsExists(value, rootsAndConstants) && 
    arr[index-1].includes("(")) {
    arr[index] = value;
  } else if (value == "(" && !setOfOperatorsExists(arr[index-1], numbers)) { 
    insertOperatorAfterConstant(str, value, index, arr);
  } else {
      arr[index] = str + value;
  }
}

function insertOperatorAfterConstant(str, value, index, arr) {
  if (arr[index-1] == "*" + PI.textContent || 
    arr[index-1] == "*" + E.textContent) {
    arr[index] = str + value
  }
}

export { inputRegulation }