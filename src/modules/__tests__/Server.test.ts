import { Server } from "../Server";

describe("Server", () => {
  it("should order by distance", () => {
    const listMock = [
      { name: "server 2", distance: 2 },
      { name: "server 1", distance: 1 },
    ];

    const listExpected = [
      { name: "server 1", distance: 1 },
      { name: "server 2", distance: 2 },
    ];
    expect(Server.sortByDistance(listMock, true)).toStrictEqual(listExpected);
  });
});
