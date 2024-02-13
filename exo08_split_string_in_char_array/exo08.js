//prendre une string et la réecrire dans un tableau
// Exemple : tb1 = ["apagnan"]  tb2 = ['a', 'p', 'a', 'g', 'n', 'a', 'n']
function reverseString(string) {
    var i = 0;
    var stock = [];
    while (i < string.length) {
        stock[i] = string[i];
        i += 1;
    }
    return stock;
}
var string = "apagnan";
console.log(reverseString(string));
