const delay = require("./delay");

describe("Some async test", () => {
  test("should first", async () => {
    const result = await delay(() => 5 + 5, 1500);

    expect(result).toBe(10);
  });
});
