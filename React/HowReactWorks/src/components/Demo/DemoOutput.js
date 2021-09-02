import React from "react";
import MyParagraph from "../UI/MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput working.");

  return (
    <MyParagraph>{props.show ? "Paragraph to show/hide." : ""}</MyParagraph>
  );
};

export default React.memo(DemoOutput);
