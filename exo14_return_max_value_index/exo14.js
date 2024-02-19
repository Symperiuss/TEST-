// parcourir un tableau d'entier et retourner l'index et la plus grande valeur du tableau
// ex : tb 1 : [15 , 999 , 4 ,8 ,5841 , 12 ]  = return 4 , 5841
function maxValueIndex(number) {
    var i = 0;
    var stock = 0;
    var stockIndex = 0;
    while (i < number.length) {
        if (number[i] > stock) {
            stock = number[i];
            stockIndex = i;
        }
        i += 1;
    }
    return { value: stock, index: stockIndex };
}
var number = [15, 5841, 4, 8, 999, 2];
console.log(maxValueIndex(number));
