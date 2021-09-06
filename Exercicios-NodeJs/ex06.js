//Encontre a string
const filme = {
    titulo: 'Harry Potter',
    ano: 2012,
    diretor: 'Fulano',
    personagem: 'Hermione'
}
exibirPropriedades(filme);

function exibirPropriedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop]);
        }
    }
}
