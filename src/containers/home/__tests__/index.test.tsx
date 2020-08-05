import React from "react";
import { render } from "@testing-library/react";

import Home from "../index";

it("should match snapshot", () => {
  // how to test UI component
  const container = render(<Home />);

  expect(container).toMatchSnapshot();
});
