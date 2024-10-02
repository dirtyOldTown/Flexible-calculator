import { SQUARE_ROOT, CUBE_ROOT, PI, E, MULTIPLY } from "./operatorsAndConstants.js";

let advancedOperators = [
    PI.textContent,
    SQUARE_ROOT.textContent,
    CUBE_ROOT.textContent,
    E.textContent,
    "(",
    ")",
  ];

let classicOperators = ["+","-", "/", MULTIPLY.textContent];

let roots = [SQUARE_ROOT.textContent, CUBE_ROOT.textContent];

export { advancedOperators, classicOperators, roots }