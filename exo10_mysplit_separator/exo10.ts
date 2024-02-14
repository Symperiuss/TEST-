// prendre un tableau de char en entrée et split chaque char selon le séparateur indiqué
//ex : str0 = "apagnan", séparateur = a str1 = [p,gn,n]
//il faut garder tous les éléments entre les séparateurs

function mysplit(string: string, separateur: string) {
  let j: number = 0;
  let i: number = 0;
  let stock: string[] = [];
  let stringStock: string = "";

  while (i < string.length) {
    i += 1;
    
    if (string[i] != separateur) {
      stringStock += string[i];

    } else {

      stock[j] = stringStock;
      j+=1
      stringStock = "";
    }

    
    
  }
  stock[j] = stringStock;

  return stock;
}

let string: string = "apagnanaeerstgtafyh";
let separateur: string = "a";

console.log(mysplit(string, separateur));
