//criar postagem usando construtor

function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = true
}

let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);