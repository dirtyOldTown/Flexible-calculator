function preventIrregularNumber(display, exp) {
  
  decimalPointCorrection(display, exp);
  zeroCorrection(display, exp);
}

// Suppress the first two zeros in the expression
function zeroCorrection(display, exp) {
  let regexp = /[^.]\b00\b/;
  let match = display.value.match(regexp);
  if (match && display.value != ".") {
    display.value = display.value.slice(0, -1) + ".";
    exp = exp.slice(0, -1);
  }
}

// Prevent a number with two decimal points
function decimalPointCorrection(display, exp) {
  let regexp = /\d+\.\d+\./;
  let match = display.value.match(regexp);
  if (match) {
    display.value = display.value.slice(0, -1);
    exp = exp.slice(0, -1);
  }
}
export { preventIrregularNumber }