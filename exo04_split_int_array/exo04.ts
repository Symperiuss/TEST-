//prendre tout entier supérieur à 10 dans un tableau et réecrire dans des cases distinctes chaque entier
// Exemple : [99] = [9,9]

function separateInteger(number: number[]) {
  let i: number = 0;
  let stock: number[] = [];

  while (i < number.length) {

    stock[i] = Math.floor(number[i] / 10);
    console.log(stock[i]);

    stock[i] = (number[i]%10);
    console.log(stock[i])

    i += 1;

  }

return stock;

}




let number: number[] = [99, 15, 76, 10, 52];

console.log(separateInteger(number));
