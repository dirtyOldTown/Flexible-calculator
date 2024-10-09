async function calculate(display, exp) {
  try {
    console.log("Before calc: " + exp)
    let result = await eval(exp);
    if (result.toString().length > 5) {
      result = Number(result.toFixed(5));
    }
    display.value = result;
    console.log(result);
  } catch (err) {
    console.log(err.message);
    alert(err.message)
  }
}

export { calculate }