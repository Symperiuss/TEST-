//prendre une string et la réecrire dans un tableau en changeant un char
// Exemple : tb1 = ["apagnan"]  tb2 = ["apognan"]

function duplicateString(string: string) {
  let i: number = 0;
  let stock: string = "";

  while (i < string.length) {
    
    if (i === 2) {
      stock += "o";
    }else

    stock += string[i];
    i += 1;
  }

  return stock;
}

let string: string = "apagnan";

console.log(duplicateString(string));

