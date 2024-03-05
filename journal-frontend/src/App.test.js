import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Sustainability Diary header", () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Sustainability Diary/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
