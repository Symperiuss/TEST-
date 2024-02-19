function daemon(numbers, k) {
    var i = 0;
    var j = k + 1;
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
var k = 3;
var numbers = [100, 97, 101, 111, 111, 113];
console.log(daemon(numbers, k));
