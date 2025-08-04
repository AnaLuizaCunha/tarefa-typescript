interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

function resumirLivro(livro: Livro) {
  console.log(
    `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}`
  );
}
const livro: Livro = {
  titulo: "teste",
  autor: "teste",
  anoPublicacao: 2000,
};

resumirLivro(livro);
