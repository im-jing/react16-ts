import { renderHook, act } from "@testing-library/react-hooks";
import useCart, { ICartItem } from "../useCart";

const initialValue = {
  sendTotal: jest.fn(),
  cartData: [
    {
      key: 1,
      checked: true,
      price: 100000,
      content: "car",
    },
    {
      key: 2,
      checked: false,
      price: 500,
      content: "shoes",
    },
  ],
};
const { result, rerender } = renderHook(() => useCart(initialValue), {
  initialProps: {
    sendTotal: jest.fn(),
    cartData: [],
  },
});
type Key = string | number;
const dummySelectedRowsKey: Key[] = [1, 2];
const dummySelectedRows: ICartItem[] = [
  {
    key: 1,
    checked: true,
    content: "car",
    price: 100000,
  },
  {
    key: 2,
    checked: false,
    content: "shoes",
    price: 500,
  },
];

describe("useCart custom hooks", () => {
  it("rerender with props", () => {
    /* rerender({
      sendTotal: jest.fn(),
      cartData: [],
    }) */
  });

  it("should call onChange", () => {
    const mockOnChange = jest.fn();
    act(() => {
      result.current.rowSelection.onChange(
        dummySelectedRowsKey,
        dummySelectedRows
      );
    });
    expect(mockOnChange).toBeUndefined();
    expect(mockOnChange).toHaveBeenCalled();
  });

  // FIXME: 不报错，但是L: 30也没有提高coverage
  it("excute sendTotal()", () => {
    const mockSendTotal = jest.fn();
    const res = mockSendTotal(dummySelectedRows);

    // expect(res).toBeUndefined()
    // expect(mockSendTotal).toHaveBeenCalled()
  });

  it("excute getSumPrice(), caculate the total of the selected rows", () => {
    const { result } = renderHook(() => useCart(initialValue));

    expect(typeof result.current.getSumPrice).toBe("function");
    expect(result.current.getSumPrice(dummySelectedRows)).toEqual(100500);
  });
});
