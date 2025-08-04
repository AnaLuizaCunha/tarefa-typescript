function retornarElemento<T>(array: T[], i: number) {
  return array[i];
}

const elementoNum = retornarElemento([1, 2, 3], 1);
console.log(elementoNum);
const elementoStr = retornarElemento(["a", "b", "c"], 2);
console.log(elementoStr);
