//prendre une string et la réecrire dans un tableau 
// Exemple : tb1 = ["apagnan"]  tb2 = ["apagnan"]

function duplicateString(string: string[]) {
  let i: number = 0;
  let stock: string[] = [];

  while (i < string.length) {
    stock[i] = string[i];


    i += 1;
  }

  return stock;
}

let string: string[] = ["apagnan"];

console.log(duplicateString(string));
