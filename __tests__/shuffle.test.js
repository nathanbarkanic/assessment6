const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  it("should return an array", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(Array.isArray(result)).toBe(true);
  });

  it("should return an array of the same length as the input", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result.length).toBe(input.length);
  });

  it("should contain all the same items as the input", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result.sort()).toEqual(input.sort());
  });

  it("should shuffle the items in the array", () => {
    // Mock Math.random to always return 0.5
    const mockRandom = jest.spyOn(Math, "random").mockReturnValue(0.5);

    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);

    expect(result).toEqual([5, 4, 3, 2, 1]);

    mockRandom.mockRestore();
  });
});
