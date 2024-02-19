// parcourir un tableau d'entier et retourner l'index et la plus grande valeur du tableau
// ex : tb 1 : [15 , 999 , 4 ,8 ,5841 , 12 ]  = return 4 , 5841

function maxValueIndex(number: number[]) {
  let i: number = 0;
  let stock: number = 0;
  let stockIndex: number = 0;
 
  while (i < number.length) {
    if (number[i] > stock) {
        stock = number[i]
        stockIndex = i 
    }

    i += 1;
  }


  return {value : stock, index: stockIndex}
}

let number : number[] = [15, 5841, 4, 8, 999,2]


console.log(maxValueIndex(number))