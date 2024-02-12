//prendre une string et la réecrire dans un tableau en changeant un char
// Exemple : tb1 = ["apagnan"]  tb2 = ["apognan"]
function duplicateString(string) {
    var i = 0;
    var stock = "";
    while (i < string.length) {
        if (i === 2) {
            stock += "o";
        }
        else
            stock += string[i];
        i += 1;
    }
    return stock;
}
var string = "apagnan";
console.log(duplicateString(string));
