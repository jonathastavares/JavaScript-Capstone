import { countComments } from "../comments.js";

describe("Testing comments counter", () => {
  test("First test", () => {
    expect(countComments([{}, {}, {}])).toBe(3);
  });
});
