// vérifier si le premier élément d'un tableau est un pivot
// si l'élément n'est pas le pivot, il faut renvoyer l'index et la valeur associé qui invalide la condition
// ex : tb 1 [ 8, 16 ,85 ,2 , 200 ,48 ,90 ]  return {index : 3 valeur : 2}

function isPivot(number: number[]) {
  let i: number = 0;
  let stock: number = 0;
  let stockIndex: number = 0;

  while (i < number.length) {
    if (number[0] > number[i]) {
        stock = number[i]
        stockIndex = i 

        return {value : stock, index : stockIndex}


    }

    i += 1;
  }
  return 0
}

let number: number[] = [8, 16, 85, 2, 200, 48, 90];
console.log(isPivot(number));
