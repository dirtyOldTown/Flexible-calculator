function squareRootHandler(exp, regExp) {
  let modifyExpression = exp.replaceAll(regExp, x => {
    return x = x.substring(1) + "**(1/2)";
  });
    
  return modifyExpression;
}

function cubeRootHandler(exp, regExp) {
  let modifyExpression = exp.replaceAll(regExp, x => {
    return x = x.substring(1) + "**(1/3)";
  });
  return modifyExpression;
}

// Insert left bracket after square_root (cube_root) symbol
function inserLeftBracket(display) {
  display.value += "(";
}

export { squareRootHandler, cubeRootHandler, inserLeftBracket }