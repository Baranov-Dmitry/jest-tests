const square = require("./square");

describe("square tests", () => {
  beforeAll(() => {
    // Выполниться перед всеми кейсами
  });

  beforeEach(() => {
    // выполниться перед каждым вызовом ф-и тест
  });

  afterEach(() => {
    // для того чтобы сбросить счетчик spyon
    jest.clearAllMocks();
  });

  test("Должно возводить число в квадрат", () => {
    expect(square(2)).toBe(4);
  });

  test("2 в квадрате должно быть меньше 5", () => {
    expect(square(2)).toBeLessThan(5);
  });

  test("2 в квадрате должно быть больше 5", () => {
    expect(square(2)).toBeGreaterThan(3);
  });

  test("Колличество вызовов", () => {
    const spyOnMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyOnMathPow).toBeCalledTimes(1);
  });

  test("Колличество вызовов", () => {
    const spyOnMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyOnMathPow).toBeCalledTimes(0);
  });

  afterAll(() => {
    // Выполниться перед всеми кейсами
  });
});
