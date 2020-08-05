import React from "react";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";

import App from "./App";

it("renders learn react link", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

it("render should match snapshot", () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
