import { Server } from "../Server";

const mock = [
  { name: "server 2 #1", distance: 3 },
  { name: "server 1 #1", distance: 1 },
  { name: "server 2 #2", distance: 2 },
];

describe("Server", () => {
  it("should order by name", () => {
    const expected = [mock[1], mock[0], mock[2]];
    const expectedAlt = [mock[2], mock[0], mock[1]];
    expect(Server.sortByName(mock)).toStrictEqual(expected);
    expect(Server.sortByName(mock, true)).toStrictEqual(expectedAlt);
  });

  it("should order by distance", () => {
    const expected = [mock[1], mock[2], mock[0]];
    const expectedAlt = [mock[0], mock[2], mock[1]];
    expect(Server.sortByDistance(mock)).toStrictEqual(expected);
    expect(Server.sortByDistance(mock, true)).toStrictEqual(expectedAlt);
  });
});
