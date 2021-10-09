import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./Greeting";

describe("Greeting Component", () => {
  test("Includes Hello World", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('Includes "nice to see you again" if the button was not clicked', () => {
    render(<Greeting />);
    const outputElement = screen.getByText("nice to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('Includes "Changed" when the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('Does not includes "nice to see you" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("nice to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
