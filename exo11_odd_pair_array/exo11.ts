// écrire une fonction qui prends un tableau en entrée, S'il est de taille pair, renvoyez tous les éléments d'index impair
//s'il est de taille  impair renvoyez un tableau qui correspond à celui en entrée  en retirant les 3 premiers élement et les 2 derniers .
//(si sa taille est < 5 et impair donc 1 , 3 tu renvoies un tableau vide comme si c'était 5)

function brownieAPasDePair(array: number[]) {
  let i: number = 0;
  let j: number = 0;
  let stock: number[] = [];

  while (i < array.length) {
    if (i % 2 != 0) {
      stock[j] = array[i];
      j += 1;
    }

    i += 1;
  }

  return stock;
}

function brownieAImpair(array: number[]) {
  let o: number = 0;
  let i: number = 3;
  let j: number = array.length - 2;
  let stock: number[] = [];

  while (i < j) {
    stock[o] = array[i];

    o += 1;
    i += 1;
  }
  return stock;
}

function oddPairArray(array: number[]) {
  if (array.length % 2 === 0) {
    return brownieAPasDePair(array);
  } else {
    return brownieAImpair(array);
  }
}

let array: number[] = [5, 15, 3, 78, 10, 0, 6, 8];

console.log(oddPairArray(array));
