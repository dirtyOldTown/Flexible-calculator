import { rootsAndConstants } from "../config/setsOfOperatorsAndConstants.js";
import { setOfOperatorsExists } from "./setOfOperatorsHandler.js";

function inputRegulation(str, value, index, arr) {
  if (setOfOperatorsExists(value, rootsAndConstants) && 
    arr[index-1].includes("(")) {
    arr[index] = value;
  } else {
      arr[index] = str + value;
  }
}

export { inputRegulation }