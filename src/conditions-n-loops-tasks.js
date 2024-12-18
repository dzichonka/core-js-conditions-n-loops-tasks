/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return (number ** 2) ** (1 / 2) === number;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let res = a;
  if (res - b < 0) {
    res = b;
  }
  if (res - c < 0) {
    res = c;
  }
  return res;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let res = false;
  if (queen.x === king.x || queen.y === king.y) {
    res = true;
  }
  if (queen.x - king.x === king.y - queen.y) {
    res = true;
  }
  if (queen.x - king.x === queen.y - king.y) {
    res = true;
  }
  return res;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a + b <= c || b + c <= a || c + a <= b) {
    return false;
  }
  return true;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let number = num;
  let res = '';
  while (number >= 10) {
    res += 'X';
    number -= 10;
  }
  if (number === 9) {
    res += 'IX';
    number -= 9;
  }
  if (number >= 5) {
    res += 'V';
    number -= 5;
  }
  if (number === 4) {
    res += 'IV';
    number -= 4;
  }
  while (number >= 1) {
    res += 'I';
    number -= 1;
  }
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  function switcher(char) {
    switch (char) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '-':
        return 'minus';
      case '.':
        return 'point';
      case ',':
        return 'point';
      default:
        return '';
    }
  }
  let res = '';
  for (let i = 0; i < numberStr.length - 1; i += 1) {
    res += `${switcher(numberStr[i])} `;
  }
  res += switcher(numberStr[numberStr.length - 1]);
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let revers = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    revers += str[i];
  }
  return str === revers;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const number = `${num}`;
  const digital = `${digit}`;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] === digital) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let l = 0; l < i; l += 1) {
      leftSum += arr[l];
    }
    for (let r = i + 1; r < arr.length; r += 1) {
      rightSum += arr[r];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }
  let top = 0;
  let right = size - 1;
  let bottom = size - 1;
  let left = 0;
  let cur = 0;
  for (; top <= bottom && left <= right; ) {
    for (let i = left; i <= right; i += 1) {
      cur += 1;
      matrix[top][i] = cur;
    }
    top += 1;
    for (let i = top; i <= bottom; i += 1) {
      cur += 1;
      matrix[i][right] = cur;
    }
    right -= 1;
    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        cur += 1;
        matrix[bottom][i] = cur;
      }
      bottom -= 1;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        cur += 1;
        matrix[i][left] = cur;
      }
      left += 1;
    }
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const mat = matrix;
  const len = mat.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      const temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < Math.floor(len / 2); j += 1) {
      const temp = mat[i][j];
      mat[i][j] = mat[i][len - j - 1];
      mat[i][len - j - 1] = temp;
    }
  }
  return mat;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (!arr || arr.length <= 1) {
    return arr;
  }
  const array = arr;
  const leng = array.length;
  const buffer = new Array(leng);
  let step = 1;
  function merge(start, mid, end) {
    let f = start;
    let s = mid;
    let r = start;
    while (f < mid && s < end) {
      if (array[f] <= array[s]) {
        buffer[r] = array[f];
        f += 1;
      } else {
        buffer[r] = array[s];
        s += 1;
      }
      r += 1;
    }
    while (f < mid) {
      buffer[r] = array[f];
      f += 1;
      r += 1;
    }
    while (s < end) {
      buffer[r] = array[s];
      s += 1;
      r += 1;
    }
  }
  while (step < leng) {
    for (let start = 0; start < leng; start += step * 2) {
      const mid = Math.min(start + step, leng);
      const end = Math.min(start + step * 2, leng);
      merge(start, mid, end);
    }
    for (let i = 0; i < leng; i += 1) {
      array[i] = buffer[i];
    }
    step *= 2;
  }
  return array;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let res = str;
  const len = str.length;
  if (len <= 1 || iterations <= 0) {
    return str;
  }
  function shuffle(input) {
    let odds = '';
    let evens = '';
    for (let j = 0; j < len; j += 1) {
      if (j % 2 === 0) {
        evens += input[j];
      } else {
        odds += input[j];
      }
    }
    return evens + odds;
  }
  function findCycle(string) {
    const init = string;
    let cur = string;
    let count = 0;
    do {
      cur = shuffle(cur);
      count += 1;
    } while (cur !== init);
    return count;
  }
  const cycleLength = findCycle(res);
  const iter = iterations % cycleLength;
  for (let i = 0; i < iter; i += 1) {
    res = shuffle(res);
  }
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const length = Math.ceil(Math.log10(number));
  if (length === 1) {
    return number;
  }
  const arr = [];
  function getDegit(i) {
    return Math.floor(number / 10 ** (length - i - 1)) % 10;
  }
  for (let i = 0; i < length; i += 1) {
    arr.push(getDegit(i));
  }
  let i = length - 2;
  const right = [arr.pop()];
  function sorted(a, b) {
    return a - b;
  }
  while (i >= 0) {
    const current = arr.pop();
    const largerIndex = right.findIndex((x) => x > current);

    if (largerIndex !== -1) {
      const larger = right.splice(largerIndex, 1)[0];
      right.push(current);
      right.sort(sorted);

      let result = [...arr, larger, ...right];
      result = result.reduce((num, digit) => num * 10 + digit, 0);
      return result;
    }
    right.push(current);
    right.sort((a, b) => a - b);
    i -= 1;
  }
  return number;
}
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
