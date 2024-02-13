// prendre un tableau d'entier en entrée et split chaque chiffre dans un nouveau tableau
//ex : tb 1 = [532,4 ,98, 30 , 759874], tb 2 = [5,3,2,4,9,8,3,0,7,5,9,8,7,4]
function getSizeNumber(number) {
    var h = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        h += 1;
    }
    return h;
}
function universal_int_split(number) {
    var i = 0;
    var stock = [];
    while (i < number.length) {
        var imageArray = number[i];
        var countNumbers = getSizeNumber(imageArray);
        var j = Math.pow(10, (countNumbers - 1));
        while (j >= 1) {
            stock[stock.length] = Math.floor(imageArray / j) % 10;
            j = Math.floor(j / 10);
            console.log(stock);
        }
        i += 1;
    }
    return stock;
}
var number = [532, 4, 98, 30, 759874];
console.log(universal_int_split(number));
