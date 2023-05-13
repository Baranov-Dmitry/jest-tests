const validateValue = require("./algebra");

describe("validateValue function", () => {
  test("Центральный вариант", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("Меньше корректного", () => {
    expect(validateValue(-10)).toBe(false);
  });

  test("Больше корректного", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("Пограничное значение с низу", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("Пограничное значение с верху", () => {
    expect(validateValue(100)).toBe(true);
  });
});
