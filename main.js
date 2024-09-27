document.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

let keypad = document.querySelector(".keypad");
let display = document.querySelector(".calculation-container > input");
let currentExpression = "";

keypad.addEventListener("click", (e) => {
  let target = e.target.closest(".number, .operator.visible");
  if (!target) return;
  let currentInput = target.textContent;
  display.value += currentInput;
});


