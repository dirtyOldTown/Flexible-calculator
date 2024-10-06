const memory = document.querySelector(".memory");
let mem = document.querySelector("#display .memory-content");
let memoryValue = 0;

function memoryPlusHandler(display) {
  memoryValue += Number(display.value);
  mem.textContent = memoryValue;
  memory.classList.add("show-memory");
}

function memoryMinusHandler(display) {
  memoryValue -= Number(display.value);
  mem.textContent = memoryValue;
  memory.classList.add("show-memory");
}

function clearMemory() {
  memoryValue = 0;
  mem.textContent = 0;
  memory.classList.remove("show-memory");
}

export { 
  memoryPlusHandler, 
  memoryMinusHandler,
  clearMemory
}