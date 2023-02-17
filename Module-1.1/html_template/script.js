// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
let count = 0;

// event listener
incrementEl.addEventListener("click", () => {
  count++;
  counterEl.innerText = count;
});

decrementEl.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  counterEl.innerText = count;
});
