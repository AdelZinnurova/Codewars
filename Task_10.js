// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// В заданном массиве целых чисел ваше решение должно найти наименьшее целое число.

// Например:

// При задании [34, 15, 88, 2] ваше решение вернет 2
// При задании [34, -345, -1, 100] ваше решение вернет -345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

function findSmallestInt(arr) {
  return Math.min(...arr);
}

