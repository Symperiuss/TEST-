//prendre une string et la réecrire dans un tableau 
// Exemple : tb1 = ["apagnan"]  tb2 = ["apagnan"]

function duplicateString(number: string[]) {
  let i: number = 0;
  let stock: string[] = [];

  while (i < number.length) {
    stock[i] = number[i];


    i += 1;
  }

  return stock;
}

let number: string[] = ["apagnan"];

console.log(duplicateString(number));
