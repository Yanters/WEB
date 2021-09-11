import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment() {},
    decrement() {},
    increase() {},
    toggleCounter() {},
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "Increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "Increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "Decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "ToggleCounter") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
