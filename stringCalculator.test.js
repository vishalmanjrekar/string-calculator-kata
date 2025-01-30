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
