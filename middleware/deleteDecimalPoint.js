function deleteDecimalPoint(input, display) {
  if (isNaN(input) && input == ".") {
   return;
  } else {
      display.value += input;
  }
}

export { deleteDecimalPoint }