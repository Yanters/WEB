import React, { useState } from "react";

export const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {changeText ? <p>Changed!</p> : <p>Nice to see you again!</p>}
      <button onClick={changeTextHandler}>Click Me!</button>
    </div>
  );
};
