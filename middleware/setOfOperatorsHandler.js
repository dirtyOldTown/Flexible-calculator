function setOfOperatorsExists(str, arr) {
    return arr.find(op => op.includes(str));
}

function setOfNumbersExists(str, arr) {
    return arr.find(op => op.includes(str));
}

export { setOfOperatorsExists, setOfNumbersExists }