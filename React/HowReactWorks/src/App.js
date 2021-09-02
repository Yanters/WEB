import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph((prevParagraph) => !prevParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Paragraph to show/hide.</p>}
      <Button onClick={toggleParagraph}>Click Me!</Button>
    </div>
  );
}

export default App;
