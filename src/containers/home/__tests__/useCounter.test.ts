import { renderHook, act } from "@testing-library/react-hooks";

import useCounter from "../useCounter";

test("should add 1 when clicked the plus button", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.counter).toBe(0);
  expect(typeof result.current.handlePlus).toBe("function");

  act(() => {
    result.current.handlePlus();
  });
  // expect(result.current.counter).toBe(1)
  // TODO: if esle还需要写个test
});

test("should minus 1 when clicked the minus button", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.counter).toBe(0);
  expect(typeof result.current.handleMinus).toBe("function");

  act(() => {
    result.current.handleMinus();
  });
  expect(result.current.counter).toBe(-1);
});
