interface RespostaAPI<T> {
  dados: T;
  sucesso: boolean;
}

const resposta1: RespostaAPI<string> = {
  dados: "teste",
  sucesso: true,
};

const resposta2: RespostaAPI<number[]> = {
  dados: [1, 2, 3, 4, 5],
  sucesso: false,
};

console.log(resposta1, resposta2);
