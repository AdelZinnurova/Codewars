// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// Задав массив целых чисел в виде строк и цифр, верните сумму значений массива, как если бы все они были числами.
// Верните ответ в виде числа.


function sumMix(x) {
    let sum = 0; // Инициализируем переменную для хранения суммы
    
    // Проходим по каждому элементу массива
    for (let i = 0; i < x.length; i++) {
      sum += Number(x[i]); // Преобразуем элемент в число и добавляем к сумме
    }
    
    return sum; // Возвращаем итоговую сумму
  }
  