import { renderHook, act } from "@testing-library/react";
import useUserData from "./useUserData";

describe("useUserData", () => {
  it(`must start with the correct initial state`, () => {
    const { result } = renderHook(() => useUserData());

    expect(result.current).toEqual({
      isLoading: true,
      error: null,
      data: null,
      dispatch: expect.any(Function),
    });
  });

  it(`should update to LOADING when the action is triggered.`, () => {
    const { result } = renderHook(() => useUserData());

    act(() => {
      result.current.dispatch({ type: "LOADING" });
    });

    expect(result.current.isLoading).toBe(true);
  });
});
