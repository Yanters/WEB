import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setallowToggle] = useState(false);

  console.log("App working.");

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevParagraph) => !prevParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setallowToggle(!allowToggle);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
      <Button onClick={toggleParagraph}>Click Me!</Button>
    </div>
  );
}

export default App;
