import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    render(<Async />);

    const listItemElement = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 3000 }
    );
    expect(listItemElement).not.toHaveLength(0);
  });
});
