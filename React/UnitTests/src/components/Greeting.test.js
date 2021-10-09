import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

test("Includes Hello World", () => {
  //Arrange
  render(<Greeting />);

  //Act

  //Assert
  const helloWorldElement = screen.getByText("Hello World", { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
