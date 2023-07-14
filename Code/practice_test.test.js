const convertSolutionUnit = require("./practice_test");

test("Convert solution unit correctly", () => {
  const result1 = convertSolutionUnit(5, 1);
  expect(result1).toBe(5000000);

  const result2 = convertSolutionUnit(10, 2);
  expect(result2).toBe(10000);

  const result3 = convertSolutionUnit(8, 3);
  expect(result3).toBe(8);
});
