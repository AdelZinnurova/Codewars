// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.

// Пример [1,-4,7,12] => 1 + 7 + 12 = 20

// Примечание: если нечего суммировать, сумма по умолчанию равна 0.

let arr = [1, -4, 7, 12];

function positiveSum(arr) {
  // Фильтруем массив, оставляя только положительные числа
  let positives = arr.filter(function (num) {
    return num > 0;
  });

  // Суммируем положительные числа
  let sum = positives.reduce(function (total, num) {
    return total + num;
  }, 0);

  return sum;
}

// Объяснение:
// Фильтрация положительных чисел:

// arr.filter(num => num > 0) оставляет в массиве только положительные числа.
// Если массив не содержит положительных чисел, positives будет пустым.
// Суммирование с помощью reduce:

// reduce складывает все числа в массиве positives.
// Начальное значение для total установлено как 0, что позволяет вернуть 0, если массив пустой.
