function decimalPointCorrection(display, exp) {
  let regexp = /\d+\.\d+\./;
  let match = display.value.match(regexp);
  if (match) {
    display.value = display.value.slice(0, -1);
    exp = exp.slice(0, -1);
  }
}

export { decimalPointCorrection }