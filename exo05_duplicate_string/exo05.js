//prendre une string et la réecrire dans un tableau 
// Exemple : tb1 = ["apagnan"]  tb2 = ["apagnan"]
function duplicateString(number) {
    var i = 0;
    var stock = [];
    while (i < number.length) {
        stock[i] = number[i];
        i += 1;
    }
    return stock;
}
var number = ["apagnan"];
console.log(duplicateString(number));
