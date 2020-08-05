import React from "react";
import { render } from "@testing-library/react";

import Book from ".";

it("should match snapshot", () => {
  const { container } = render(<Book />);
  expect(container).toMatchSnapshot();
});
