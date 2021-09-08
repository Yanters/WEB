import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "Input") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "Blure") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "Reset") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "Input", value: event.target.value });
  };

  const inputBlureHandler = (event) => {
    dispatch({ type: "Blur" });
  };

  const reset = () => {
    dispatch({ type: "Reset" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlureHandler,
    reset,
  };
};

export default useInput;
