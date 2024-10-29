// Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// Создайте боевую функцию, которая берёт текущее здоровье игрока и количество полученного урона и возвращает новое здоровье игрока. Здоровье не может быть меньше 0.

function combat(health, damage) {
    if (health - damage < 0) {
        return 0;
    } else {
        return health - damage;
    }
  }