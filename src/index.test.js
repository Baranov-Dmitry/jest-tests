import { createAdder } from "./index";

describe("createAdder tests", () => {
  const addNumber = 50;
  const addNumberFn = createAdder(addNumber);
  it("createAdder with number 50 and 10", () => {
    expect(addNumberFn(10)).toBe(60);
  });
  it("createAdder with number 50 and negaive -100", () => {
    expect(addNumberFn(-100)).toBe(-50);
  });
  it("createAdder with number 50 and string", () => {
    expect(addNumberFn("Holla")).toBe("50Holla");
  });
  it("createAdder with number 50 and any onject", () => {
    expect(addNumberFn({})).toBe("50[object Object]");
  });
  it("createAdder with number 50 and array", () => {
    expect(addNumberFn([1, 2, 3])).toBe("501,2,3");
  });
});
