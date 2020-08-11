import { renderHook, act } from "@testing-library/react-hooks";

import useTotal from "../useTotal";

describe("cartList custom hooks", () => {
  it("display total correctly", () => {
    const { result } = renderHook(() => useTotal());

    expect(result.current.sum).toEqual(0);
    expect(typeof result.current.getTotal).toBe("function");

    act(() => result.current.getTotal(500));
    expect(result.current.sum).toEqual(500);
  });
});
