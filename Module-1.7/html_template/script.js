// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// actions identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// actions creators
const increment = (pValue) => {
  return {
    type: INCREMENT,
    payload: pValue,
  };
};

const decrement = (pValue) => {
  return {
    type: DECREMENT,
    payload: pValue,
  };
};

// initial state
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// ----------------------------

// button click listener
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
