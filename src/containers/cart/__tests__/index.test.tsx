import React from "react";
import { render, fireEvent, getByRole } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import "./matchMedia.mock";
import Cart from "../index";

describe("<Cart />", () => {
  it("render should match snapshot", () => {
    const { container, debug } = render(<Cart />);

    expect(container).toMatchSnapshot();
  });
});
