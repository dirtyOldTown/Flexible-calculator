function preventIrregularNumber(display, exp) {
  
  decimalPointCorrection(display, exp);
  zeroCorrection(display, exp);
}

// Suppress the first two zeros in the expression
function zeroCorrection(display, exp) {
  let regexp = /[^.]\b0\d\b/;
  let match = display.value.match(regexp);
  if (match && display.value != "." && display.value.slice(-1) == "0") {
    display.value = display.value.slice(0, -1) + ".";
    exp = exp.slice(0, -1);
  } else if (match && display.value != ".") {
    display.value = display.value.slice(0, -1) + "." + display.value.slice(-1);
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