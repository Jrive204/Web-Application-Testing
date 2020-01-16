import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test("renders without crash", () => {
  render(<App />);
});

test("renders without crash", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
