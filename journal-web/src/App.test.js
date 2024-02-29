import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Sustainability Diary header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Sustainability Diary/i);
  expect(linkElement).toBeInTheDocument();
});
