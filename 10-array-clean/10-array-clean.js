function filterArray(arr, removeFn) {
  return arr.filter((n) => !removeFn(n));
}

const numbers = [1, 2, 3, 4];

const result = filterArray(numbers, (n) => n % 2 === 0);
console.log(result);
