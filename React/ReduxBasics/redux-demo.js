const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  console.log("counterReducer");
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "Decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState, "subscribe func");
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "Increment" });
store.dispatch({ type: "Decrement" });
