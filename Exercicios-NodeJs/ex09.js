//Contador de asteriscos

exibirAstericos(10);

function exibirAstericos(linhas){
    let padrão = '';
    for(let linha = 1; linha <= linhas; linha++){
        padrão += '*'
        console.log(padrão);
    }
}