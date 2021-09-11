// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "Increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "Increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "Decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === "ToggleCounter") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export default store;
