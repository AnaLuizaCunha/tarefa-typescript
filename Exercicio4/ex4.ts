interface Usuario {
  nome: string;
  email: string;
  exibirInfo: () => string;
}
const usuario: Usuario = {
  nome: "teste",
  email: "teste@teste.com",
  exibirInfo: function (): string {
    const info: string = `Nome: ${this.nome} - Email: ${this.email}`;
    return info;
  },
};

const usuarioInfo: string = usuario.exibirInfo();
console.log(usuarioInfo);
