function replaceStringWithOperatorOrOperand(str, replacement, currentExpression) {
  let arrayOfExpression = currentExpression.split("");
  arrayOfExpression.forEach((value, index, arr) => {
    if (value.includes(str)) {
      arr[index] = replacement;
    }
  });

  currentExpression = arrayOfExpression.join("");
}

export { replaceStringWithOperatorOrOperand }