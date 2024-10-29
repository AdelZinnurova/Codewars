// Grasshopper - Terminal game move function

// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

// Функция перемещения в игре Терминал
// В этой игре герой перемещается слева направо. Игрок бросает кубик и перемещается на количество мест, указанное на кубике, два раза.

// Создайте функцию для терминальной игры, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию.

// Пример:
// move(3, 6) должно быть равно 15


function move (position, roll) {
    const result = position + roll + roll
    return result
  }