"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarMensagemStatus(status) {
    if (status === "sucesso") {
        console.log(`Requisicão concluída. Status: ${status}`);
    }
    else if (status === "erro") {
        console.log(`Erro na requisição dos dados. Status: ${status}`);
    }
    else {
        console.log(`Aguarde... carregando dados. Status: ${status}`);
    }
}
mostrarMensagemStatus("sucesso");
//# sourceMappingURL=ex2.js.map