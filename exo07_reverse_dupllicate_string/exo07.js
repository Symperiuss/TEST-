//prendre une string et la réecrire dans un tableau
// Exemple : tb1 = ["apagnan"]  tb2 = ["nangapa"]
function reverseString(string) {
    var i = 0;
    var stock = "";
    while (i < string.length) {
        stock += string[string.length - i - 1];
        i += 1;
    }
    return stock;
}
var string = "apagnan";
console.log(reverseString(string));
