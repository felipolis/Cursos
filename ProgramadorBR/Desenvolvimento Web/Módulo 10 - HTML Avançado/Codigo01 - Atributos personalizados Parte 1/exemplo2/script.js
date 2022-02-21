let lista = document.getElementById('lista');
let num = parseInt(lista.getAttribute('num'));
let conteudo = '';

for(let i = 0; i < num; i++){
    conteudo += '<li>Item ' + (i + 1) + '</li>';
}

lista.innerHTML = conteudo;