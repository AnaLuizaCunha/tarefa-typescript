"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apresentarPessoa(pessoa) {
    const mensagem = `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}`;
    return mensagem;
}
const pessoa = {
    nome: "teste",
    idade: 25,
    genero: "feminino",
};
const mensagemPessoa = apresentarPessoa(pessoa);
console.log(mensagemPessoa);
//# sourceMappingURL=ex5.js.map