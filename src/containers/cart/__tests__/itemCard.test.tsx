import React from "react";
import { render } from "@testing-library/react";
import { getByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom";

import ItemCard, { Props } from "../itemCart";

const testProps: Props = {
  checkStatus: true,
  unitPrice: 1000,
  itemContent: "desk",
};

describe("itemCard component", () => {
  it("should render the itemCard component", () => {
    const { container } = render(<ItemCard {...testProps} />);
    // const element = getByTestId(container, 'test-item-card')

    // expect(element).toHaveClass('item-card')
    // expect(container).toMatchSnapshot()
  });
});
