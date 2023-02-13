// O(sqrt(n)+n)
(function getTriangularNumber() {
  console.time('TIME');

  let triangularNumber = 1;
  let index = 1;

  function divisorsCount(number) {
    let count = 0;

    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        count += 2;
      }
    }
    return count;
  }

  while (divisorsCount(triangularNumber) <= 500) {
    index++;
    triangularNumber = (index + 1) * index / 2;
  }

  console.log(triangularNumber)
  console.timeEnd('TIME');
})();
