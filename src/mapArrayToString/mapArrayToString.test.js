const mapArrayToString = require("./mapArrayToString");

describe("Test mapArrayToString", () => {
  test("Базовое поведение", () => {
    // toBe - не подходит для сравнения ссылочных типов
    // toEqual - для глубокого сравнения
    expect(mapArrayToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("Проверка фильтрации, должны остаться только цифры", () => {
    expect(mapArrayToString([1, 2, 3, null, undefined, {}])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("При передачи пустова массива должен вернуться пустой массив", () => {
    expect(mapArrayToString([])).toEqual([]);
  });

  test("При передачи пустова массива должен вернуться пустой массив", () => {
    expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
