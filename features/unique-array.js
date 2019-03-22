const numbersArray = [1, 2, 2, 3, 4, 5, 1]

const numbersSet = new Set(numbersArray);
// Set(5) {1, 2, 3, 4, 5}

const numbersArrayUnique = Array.from(numbersSet);
// (5) [1, 2, 3, 4, 5]
