function insert(val) {
  const display = document.querySelector('[name="display"]');
  display.value += val;
}

function clearDisplay() {
  const display = document.querySelector('[name="display"]');
  display.value = '';
}

function deleteLast() {
  const display = document.querySelector('[name="display"]');
  display.value = display.value.toString().slice(0, -1);
}
function calculate() {
  const display = document.querySelector('[name="display"]');
  try {
    display.value = math.evaluate(display.value); // Safely evaluates math
  } catch {
    display.value = 'Error';
  }
}

