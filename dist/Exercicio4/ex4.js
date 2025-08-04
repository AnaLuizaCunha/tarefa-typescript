"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario = {
    nome: "teste",
    email: "teste@teste.com",
    exibirInfo: function () {
        const info = `Nome: ${this.nome} - Email: ${this.email}`;
        return info;
    },
};
const usuarioInfo = usuario.exibirInfo();
console.log(usuarioInfo);
//# sourceMappingURL=ex4.js.map