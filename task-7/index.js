/** 
 * Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. Очевидно, что 6-е простое число - 13.
 * Какое число является 10001-м простым числом?
 */

console.time('Time');

let initNum = 3;
const primeNumbers = [2, initNum];

while (initNum) {
  if (primeNumbers.some((num) => !(initNum % num))) {
    initNum += 2;
    continue;
  }

  primeNumbers.push(initNum);

  if (primeNumbers.length > 10000) break;

}

console.log(primeNumbers[primeNumbers.length - 1]);
console.timeEnd('Time');
