import { setOfOperatorsExists } from "./setOfOperatorsHandler.js";
import { inputRegulation } from "./inputRegulation.js";
import { specificOperatorsAndConstant, classicOperators, numbers, constants, roots, rootsAndConstants } from "../config/setsOfOperatorsAndConstants.js";

function insertOperator(str, arr) {
  arr.forEach((value, index, arr) => {
    // Insert operator(*) before roots and constants (if it not exists)
    if (!setOfOperatorsExists(arr[index-1], classicOperators)
      && setOfOperatorsExists(value, specificOperatorsAndConstant) && index != 0) {
        inputRegulation(str, value, index, arr);
    }
    // Insert operator(*) after constants (if it not exists)
    if (setOfOperatorsExists(arr[index-1], constants)
      && (setOfOperatorsExists(value, numbers))) {
        inputRegulation(str, value, index, arr);
    }
  });
}

export { insertOperator }

