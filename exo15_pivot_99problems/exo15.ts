function daemon(numbers: number[], k: number) {
  let i: number = 0;
  let j: number = k + 1;

  while (i < k) {
    if (numbers[i] >= numbers[k]) {
      return false;
    }

    i += 1;
  }

  while (j < numbers.length) {
    if (numbers[j] < numbers[k]) {
      return false;
    }
    j += 1;
  }

  return true;
}

let k: number = 3;
let numbers: number[] = [100, 97, 101, 111, 111, 113];
console.log(daemon(numbers, k));
