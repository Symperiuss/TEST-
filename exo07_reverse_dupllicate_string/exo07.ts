//prendre une string et la réecrire dans un tableau
// Exemple : tb1 = ["apagnan"]  tb2 = ["nangapa"]

function reverseString(string: string) {
  let i: number = 0;
  let stock: string = "";

  while (i < string.length) {
    stock += string[string.length - i - 1];

    i += 1;
  }

  return stock;
}

let string: string = "apagnan";

console.log(reverseString(string));
