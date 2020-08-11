import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ItemCard, { Props } from "../itemCart";

const testProps: Props = {
  id: 3,
  checkStatus: true,
  unitPrice: 1000,
  itemContent: "desk",
};

describe("itemCard component", () => {
  it("should render the itemCard component correctly", () => {
    const { container, debug, getByRole } = render(<ItemCard {...testProps} />);
    // debug(getByRole('item-card'))

    expect(getByRole("item-card")).toHaveClass("item-card");
    expect(container).toMatchSnapshot();
  });
});
