import { getHierarchy } from "../src/hierarchy";

describe("function getText", () => {
  test("should return a string", () => {
    var test = getHierarchy("P2000", [], []);
    console.log(test);
  });
});
