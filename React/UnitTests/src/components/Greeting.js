import React, { useState } from "react";
import Output from "./Output";

export const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {changeText ? (
        <Output>Changed!</Output>
      ) : (
        <Output>Nice to see you again!</Output>
      )}
      <button onClick={changeTextHandler}>Click Me!</button>
    </div>
  );
};
