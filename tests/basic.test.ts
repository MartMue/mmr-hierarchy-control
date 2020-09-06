import { getText } from "../src/Calculator";

describe("function getText", () => {
  test("should return a string", () => {
    expect(getText()).toBe("abc");
  });
});
