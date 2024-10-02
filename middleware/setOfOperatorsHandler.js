function setOfOperatorsExists(input, arr) {
    return arr.find(op => op.includes(input));
}

export { setOfOperatorsExists }