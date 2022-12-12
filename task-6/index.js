/** 
 * Сумма квадратов первых десяти натуральных чисел равна
 * 1^2 + 2^2 + ... + 10^2 = 385
 * Квадрат суммы первых десяти натуральных чисел равен
 * (1 + 2 + ... + 10)^2 = 552 = 3025
 * Следовательно, разность между суммой квадратов и квадратом суммы первых десяти натуральных чисел составляет 3025 − 385 = 2640.
 * Найдите разность между суммой квадратов и квадратом суммы первых ста натуральных чисел.
 */

console.time('Time');

let sumOfSquares = 1;
let sumOfNumbers = 1;

for (let i = 2; i < 101; i++) {
  sumOfSquares += i**2;
  sumOfNumbers += i;
}

let sumSquare = sumOfNumbers**2;
let difference = sumSquare - sumOfSquares;

console.log(difference);
console.timeEnd('Time');
