import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("App-test", async () => {
  render(<App />);
  let cards = await screen.findAllByAltText(/card-img/i);
  expect(cards).toHaveLength(12);
  userEvent.click(screen.getAllByAltText(/card-img/i)[0]);
  // screen.debug();
});
