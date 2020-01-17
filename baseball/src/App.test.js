import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

test("renders without crash", () => {
  render(<App />);
  render(<Display />);
  render(<Dashboard />);
});

test("renders without crash", () => {
  const { getByText } = render(<App />);
  getByText(/baseball/i);
});

test("Balls is found", () => {
  const { getByTestId } = render(<Display />);

  getByTestId(/balls/i);
});

test("Hits is found", () => {
  const { getByTestId } = render(<Dashboard />);

  getByTestId(/hits/i);
});
