type statusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(status: statusRequisicao) {
  if (status === "sucesso") {
    console.log(`Requisicão concluída. Status: ${status}`);
  } else if (status === "erro") {
    console.log(`Erro na requisição dos dados. Status: ${status}`);
  } else {
    console.log(`Aguarde... carregando dados. Status: ${status}`);
  }
}

mostrarMensagemStatus("sucesso");
