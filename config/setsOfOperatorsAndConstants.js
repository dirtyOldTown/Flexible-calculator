import { SQUARE_ROOT, CUBE_ROOT, PI, E, MULTIPLY } from "./operatorsAndConstants.js";

let advancedOperatorsAndConstants = [
    PI.textContent,
    SQUARE_ROOT.textContent,
    CUBE_ROOT.textContent,
    E.textContent,
    "(",
    ")",
  ];

let classicOperators = ["+","-", "/", MULTIPLY.textContent];
let roots = [SQUARE_ROOT.textContent, CUBE_ROOT.textContent];
let constants = [PI.textContent, E.textContent];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let specificOperatorsAndConstant = [
  PI.textContent,
  SQUARE_ROOT.textContent,
  CUBE_ROOT.textContent,
  E.textContent,
  "(",
];

let rootsAndConstants = roots.concat(constants);


export { 
  advancedOperatorsAndConstants, 
  classicOperators, 
  roots, 
  constants, 
  specificOperatorsAndConstant,
  rootsAndConstants,
  numbers
}