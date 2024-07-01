import { expect, test, describe } from "bun:test";
import { ex1, ex2, ex3, ex4, ex5, ex6 } from "../exercises/level03";

describe("Level 3", () => {
  test.each([[0], [5], [9]])("Exercise 1: %p", (a) => {
    expect(ex1(a)).toEqual([a, a, a]);
  });

  test.each([
    [[0, 2, 4], 2],
    [[5, 5, 5], 5],
    [[9, 8, 7], 8],
  ])("Exercise 2: %p", (a, b) => {
    expect(ex2(a)).toBe(b);
  });

  test.each([
    [
      1,
      [
        [1, 1],
        [1, 1],
      ],
    ],
    [
      2,
      [
        [2, 2],
        [2, 2],
      ],
    ],
  ])("Exercise 3: %p", (a, b) => {
    expect(ex3(a)).toEqual(b);
  });

  test.each([
    [[], true],
    [[2], false],
    [[2, 3], false],
  ])("Exercise 4: %p", (a, b) => {
    expect(ex4(a)).toEqual(b);
  });

  test.each([
    [[1], 1],
    [[1, 2, 4, 3], 4],
    [[-3, -5, -1], -1],
  ])("Exercise 5: %p", (a, b) => {
    expect(ex5(a)).toEqual(b);
  });

  test.each([
    [[], 0],
    [[[1, 2, 4, 3]], 10],
    [
      [
        [1, -1],
        [2, 2],
      ],
      4,
    ],
  ])("Exercise 6: %p", (a, b) => {
    expect(ex6(a)).toEqual(b);
  });
});
