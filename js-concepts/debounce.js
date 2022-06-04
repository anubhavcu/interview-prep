const input = document.getElementById('input');
const output = document.getElementById('output');

function handleInput(e) {
  output.innerText = e.target.value;
}
function debounce(fn, delay) {
  var timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
handleInput = debounce(handleInput, 500);
input.addEventListener('keyup', handleInput);
