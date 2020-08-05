import { renderHook, act } from "@testing-library/react-hooks";

import useLikeButton from "../useLikeButton";

test("handleSetLike Function", () => {
  const { result } = renderHook(() => useLikeButton());

  expect(result.current.like).toBe(0);
  expect(typeof result.current.handleSetLike).toBe("function");
});

test("handleClicked Function", () => {
  const { result } = renderHook(() => useLikeButton());

  expect(typeof result.current.handleClicked).toBe("function");
});

// TODO: useEffect里的代码怎么写test
