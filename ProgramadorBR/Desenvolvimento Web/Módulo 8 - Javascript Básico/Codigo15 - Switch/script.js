var nota1 = 5.0;
var nota2 = 5.8;
var media = (nota1 + nota2) / 2;
var conceito;

if(media >= 8){
    conceito = 'Otimo'
} else if(media > 0.5){
    conceito = 'Bom'
}else{
    conceito = 'Regular'
}

console.log('A media do aluno foi: ' + media);
console.log('O conceito do aluno foi: ' + conceito);

switch(conceito){

    case 'Otimo':
        console.log('Parabéns, você é um aluno excelente');
        break;
    
    case 'Bom':
        console.log('Você é um aluno bom');
        break;
    
    case 'Regular':
        console.log('Você é um aluno regular');
        break;
    
    default:
        console.log('Houve algum erro');
        break;
}