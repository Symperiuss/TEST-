// vérifier si le premier élément d'un tableau est un pivot
// si l'élément n'est pas le pivot, il faut renvoyer la plus haute valeur entre index 0 et l'élément qui invalide le pivot
// ex : tb 1 [ 8, 16 ,85 ,2 , 200 ,48 ,90 ]  return 85

function isPivot(number: number[]) {
  let i: number = 0;
  let stock: number = number[0];

  while (i < number.length) {
    if (number[i] > stock) {
      stock = number[i];
    }

    if (number[0] > number[i]) {
      return stock;
    }

    i += 1;
  }
  return 0;
}

let number: number[] = [8, 16, 87, 2, 200, 48, 90];
console.log(isPivot(number));
