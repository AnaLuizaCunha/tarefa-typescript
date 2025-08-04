type Genero = "feminino" | "masculino";
interface Pessoa {
  nome: string;
  idade: number;
  genero: Genero;
}

function apresentarPessoa(pessoa: Pessoa): string {
  const mensagem = `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}`;
  return mensagem;
}

const pessoa: Pessoa = {
  nome: "teste",
  idade: 25,
  genero: "feminino",
};

const mensagemPessoa: string = apresentarPessoa(pessoa);
console.log(mensagemPessoa);
