// Array plus array
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Я новичок в кодировании и сейчас я хочу получить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь.

// P.S. Каждый массив содержит только целые числа. Выходные данные тоже являются числами.

function arrayPlusArray(arr1, arr2) {
let sum1 = 0;
let sum2 = 0;
for (let index = 0; index < arr1.length; index++) {
    sum1 += arr1[index];
}
for (let index = 0; index < arr2.length; index++) {
    sum2 += arr2[index];
}

return sum1 + sum2
  }
