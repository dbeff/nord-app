import { serverSlice, initialState } from "../server";

const mock = [
  { name: "server 2 #1", distance: 3 },
  { name: "server 1 #1", distance: 1 },
  { name: "server 2 #2", distance: 2 },
];

describe("server reducer", () => {
  it("should handle initial state", () => {
    expect(serverSlice.reducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle loading action", () => {
    const actual = serverSlice.reducer(
      initialState,
      serverSlice.actions.loading()
    );
    expect(actual.loading).toEqual(true);
  });

  it("should handle fetchServersSuccess action", () => {
    const actual = serverSlice.reducer(
      initialState,
      serverSlice.actions.fetchServersSuccess(mock)
    );
    expect(actual.allServers).toEqual(mock);
    expect(actual.loading).toEqual(false);
    expect(actual.error).toEqual(null);
  });

  it("should handle orderByName action", () => {
    const expected = [mock[1], mock[0], mock[2]];
    const actual = serverSlice.reducer(
      { ...initialState, allServers: mock },
      serverSlice.actions.orderByName()
    );
    expect(actual.allServers).toEqual(expected);
    expect(actual.nameOrderAlt).toEqual(true);
    expect(actual.loading).toEqual(false);
    expect(actual.error).toEqual(null);
  });

  it("should handle orderByDistance action", () => {
    const expected = [mock[1], mock[2], mock[0]];
    const actual = serverSlice.reducer(
      { ...initialState, allServers: mock },
      serverSlice.actions.orderByDistance()
    );
    expect(actual.allServers).toEqual(expected);
    expect(actual.distanceOrderAlt).toEqual(true);
    expect(actual.loading).toEqual(false);
    expect(actual.error).toEqual(null);
  });
});
