// Level 3: Arrays and Loops

/**
 * Exercise 1
 *
 * JavaScript arrays represent a list of items (also called elements). Elements are
 * separated by commas and placed inside of square brackets.
 *
 * ```
 * [1, 2, 3, 4]
 * ```
 *
 * Write a function that take a number and returns an array with that number
 * repeated 3 times.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
export const ex1 = (a: number) => {
  return null;
};

/**
 * Exercise 2
 *
 * To access an element of an array, use square brackets
 *
 * ```
 * myArray[2]
 * ```
 *
 * Note: The first element of an array is 0, not 1!
 *
 * Write a function that gets the second element of an array.
 */
export const ex2 = (a: number[]) => {
  return null;
};

/**
 * Exercise 3
 *
 * Arrays can also contain array!
 *
 * ```
 * [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * ```
 *
 * This can be used to represent a whole grid of numbers, also called a matrix or a
 * multi-dimensional array.
 *
 * Write a function that returns a 2 x 2 grid of the passed number.
 */
export const ex3 = (a: number) => {
  return null;
};

/**
 * Exercise 4
 *
 * Arrays have a `length` property to get their length.
 *
 * ```
 * myArray.length
 * ```
 *
 * Write a function that returns `true` if the length of an array is empty.
 */
export const ex4 = (a: number[]) => {
  return null;
};

/**
 * Exercise 5
 *
 * Loops can be used look at each element of an array. One way to loop is
 * a `for` loop:
 *
 * ```
 * for (let i = 0; i < a.length; i++) {
 *   // do something with a[i]
 * }
 * ```
 *
 * Here `i` is a variable and is the index used for the array. The `i++` means increment `i`
 * by 1.
 *
 * Write a function that returns the biggest number in an array.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */
export const ex5 = (a: number[]) => {
  return null;
};

/**
 * Exercise 6
 *
 * You can also nest loops. This is useful for matrices.
 *
 * ```
 * for (let i = 0; i < a.length; i++) {
 *   for (let j = 0; j < a[i].length; j++) {
 *     // do something with a[i][j]
 *   }
 * }
 * ```
 *
 * Write a function that returns the sum of the elements in an 2-dimensional array.
 */
export const ex6 = (a: number[][]) => {
  return null;
};
