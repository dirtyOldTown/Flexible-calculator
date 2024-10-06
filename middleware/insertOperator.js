import { setOfOperatorsExists } from "./setOfOperatorsHandler.js";
import { inputRegulation } from "./inputRegulation.js";
import { specificOperatorsAndConstant, classicOperators, numbers } from "../config/setsOfOperatorsAndConstants.js";

function insertOperator(str, arr) {
  arr.forEach((value, index, arr) => {
    if (!setOfOperatorsExists(arr[index-1], classicOperators)
      && setOfOperatorsExists(value, specificOperatorsAndConstant) && index != 0) {
        inputRegulation(str, value, index, arr);
    }
    if (setOfOperatorsExists(arr[index-1], specificOperatorsAndConstant)
      && setOfOperatorsExists(value, numbers)) {
        inputRegulation(str, value, index, arr);
    }
  });
}

export { insertOperator }

