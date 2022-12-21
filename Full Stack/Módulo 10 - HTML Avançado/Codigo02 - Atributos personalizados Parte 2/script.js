let lista = document.getElementById('lista');

lista.dataset.n = 5; // Setar atributo personalizado
let num = parseInt(lista.dataset.n); // Obter atributo personalizado

let id = parseInt(lista.dataset.id);
console.log(id);

let conteudo = '';
for(let i = 0; i < num; i++){
    conteudo += '<li>Item ' + (i + 1) + '</li>';
}
lista.innerHTML = conteudo;