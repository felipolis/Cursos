let p = document.getElementById('p1');
p.innerHTML = '<strong>Novo conteudo</strong>'; // Altera o conteudo html

p.innerText = '<strong>Conteudo mais novo</strong>'; //mostra tudo oq aparece na tela

p.textContent = '<strong>Conteudo mais novo ainda</strong>'; //mostra apenas o que esta dentro da tag

p.className = 'cor-verde'; //adiciona uma classe ao elemento

p.style = 'color: red;'; //adiciona um estilo ao elemento

let meuatt = p.getAttribute('meuAtt'); //pega o atributo
console.log(meuatt);

p.setAttribute('meuAtt', 'novo valor'); //altera ou cria um atributo
console.log(p);

p.style.backgroundColor = 'blue'; //altera o estilo
