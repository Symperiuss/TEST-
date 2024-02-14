// prendre un tableau de char en entrée et split chaque char selon le séparateur indiqué
//ex : str0 = "apagnan", séparateur = a str1 = [p,gn,n]
//il faut garder tous les éléments entre les séparateurs
function mysplit(string, separateur) {
    var j = 0;
    var i = 0;
    var stock = [];
    var stringStock = "";
    while (i < string.length) {
        i += 1;
        if (string[i] != separateur) {
            stringStock += string[i];
        }
        else {
            stock[j] = stringStock;
            j += 1;
            stringStock = "";
        }
    }
    stock[j] = stringStock;
    return stock;
}
var string = "apagnanaeerstgtafyh";
var separateur = "a";
console.log(mysplit(string, separateur));
