//prendre tout entier supérieur à 10 dans un tableau et réecrire dans des cases distinctes chaque entier
// Exemple : [99] = [9,9]
function separateInteger(number) {
    var i = 0;
    var stock = [];
    while (i < number.length) {
        stock[i] = Math.floor(number[i] / 10);
        console.log(stock[i]);
        stock[1 + 2 * i] = (number[i] % 10);
        console.log(stock[i]);
        i += 1;
    }
    return stock;
}
var number = [99, 15, 76, 10, 52];
console.log(separateInteger(number));
