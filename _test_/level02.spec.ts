import { expect, test, describe } from "bun:test";
import { ex1, ex2, ex3 } from "../exercises/level02";

describe("Level 2", () => {
  test.each([
    [0, 0, true],
    [5, -1, false],
    [9, 10, false],
  ])("Exercise 1: %p === %p", (a, b, c) => {
    expect(ex1(a, b)).toBe(c);
  });

  test.each([
    [3, 7, 4],
    [4, 4, 0],
    [10, 5, 5],
  ])("Exercise 2: |%p - %p| = %p", (a, b, c) => {
    expect(ex2(a, b)).toBe(c);
  });

  test.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 2],
    [5, 3],
    [6, 3],
    [-1, 0],
    [-2, 4],
    [-3, 0],
    [-4, 16],
  ])("Exercise 3: %p", (a, b) => {
    expect(ex3(a)).toBe(b);
  });
});
