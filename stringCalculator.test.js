const add = require("./stringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself on single number", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

test("returns the sum of two comma-separated numbers", () => {
  expect(add("1,2")).toBe(3);
  expect(add("4,5")).toBe(9);
});

test("returns the sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("10,20,30,40")).toBe(100);
});

test("handles new lines as delimiters along with commas", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("4\n5\n6")).toBe(15);
});

test('supports custom delimiters defined in the format "//[delimiter]\\n[numbers]"', () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//#\n4#5#6")).toBe(15);
});
