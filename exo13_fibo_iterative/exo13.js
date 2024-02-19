// ecrire une fonction qui ecrit la suite de fibonnaci de manière iterative
function fibonnaciIterative(n) {
    if (n < 1) {
        return 0;
    }
    var i = 1; // bien mettre à 1 sinon décale toute la suite 
    var a = 0;
    var b = 1;
    while (i < n) {
        var c = a + b;
        a = b;
        b = c;
        i += 1;
    }
    return b;
}
console.log(fibonnaciIterative(15));
