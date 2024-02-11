// mettre les valeurs de tableau 1 dans tableau 2
//ensuite inverser l'ordre
function push(number) {
    var number2 = [];
    var i = 0;
    while (i < number.length) {
        number2[i] = number[number.length - i - 1];
        i += 1;
    }
    return number2;
}
var number = [99, 65, 15, 12, 41];
console.log(push(number));
