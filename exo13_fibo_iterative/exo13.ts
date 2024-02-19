// ecrire une fonction qui ecrit la suite de fibonnaci de manière iterative

function fibonnaciIterative(n) {
  if (n < 1) {
    return 0;
  }

  let i: number = 1; // bien mettre à 1 sinon décale toute la suite 
  let a: number = 0;
  let b: number = 1;


  while (i < n) {
    let c: number = a + b;
    a = b;
    b = c;

    i += 1;
  }

  return b 
}
console.log(fibonnaciIterative(15));
