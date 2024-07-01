import { expect, test, describe } from "bun:test";
import { ex1, ex2, ex3, ex4, ex5, ex6 } from "../exercises/level01";

describe("Level 1", () => {
  test.each([
    [0, 0, 0],
    [5, -1, 4],
    [9, 10, 19],
  ])("Exercise 1: %p + %p = %p", (a, b, c) => {
    expect(ex1(a, b)).toBe(c);
  });

  test.each([
    [3, 7, -4],
    [4, 4, 0],
    [10, 5, 5],
  ])("Exercise 2: %p - %p = %p", (b, a, c) => {
    expect(ex2(a, b)).toBe(c);
  });

  test.each([
    [2, 6, 12],
    [4, 4, 16],
    [10, 0, 0],
  ])("Exercise 3: %p * %p = %p", (a, b, c) => {
    expect(ex3(a, b)).toBe(c);
  });

  test.each([
    [0, 7, 0],
    [4, 4, 1],
    [10, 5, 2],
    [5, 10, 0.5],
  ])("Exercise 4: %p / %p = %p", (b, a, c) => {
    expect(ex4(a, b)).toBe(c);
  });

  test.each([
    [0, 7, 0],
    [4, 4, 1],
    [10, 5, 2],
    [5, 10, 0],
  ])("Exercise 5: %p / %p = %p", (b, a, c) => {
    expect(ex5(a, b)).toBe(c);
  });

  test.each([
    [3, 7, 3],
    [4, 4, 0],
    [10, 5, 0],
  ])("Exercise 6: %p mod %p = %p", (b, a, c) => {
    expect(ex6(a, b)).toBe(c);
  });
});
