import { authSlice, initialState } from "../auth";

describe("auth reducer", () => {
  it("should handle initial state", () => {
    expect(authSlice.reducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle loading action", () => {
    const actual = authSlice.reducer(initialState, authSlice.actions.loading());
    expect(actual.loading).toEqual(true);
  });

  it("should handle login action", () => {
    const actual = authSlice.reducer(
      initialState,
      authSlice.actions.login({ token: "token-mock" })
    );
    expect(actual.token).toEqual("token-mock");
    expect(actual.isAuthenticated).toEqual(true);
    expect(actual.loading).toEqual(false);
    expect(actual.error).toEqual(null);
  });

  it("should handle logout action", () => {
    const actual = authSlice.reducer(
      { ...initialState, token: "token-mock" },
      authSlice.actions.logout()
    );
    expect(actual.token).toEqual(null);
    expect(actual.isAuthenticated).toEqual(false);
    expect(actual.loading).toEqual(false);
    expect(actual.error).toEqual(null);
  });

  it("should handle error action", () => {
    const actual = authSlice.reducer(
      { ...initialState },
      authSlice.actions.setError("error")
    );
    expect(actual.error).toEqual("error");
  });
});
