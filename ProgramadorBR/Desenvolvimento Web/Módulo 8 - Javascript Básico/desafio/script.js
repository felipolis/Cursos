// nome do aluno - nota1 - nota2 - media - aprovado/reprovado

var nomes = ['João', 'Maria', 'José'];
var notasA = [7.0, 6.5, 8.5];
var notasB = [5.7, 8.5, 9.5];

function media(a, b) {
    m = (a + b) / 2;
    return m;
}

function passou(media) {
    if (media >= 7) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

for(var index in nomes){
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var mediaFinal = media(nota1, nota2);
    var resultado = passou(mediaFinal);

    console.log(nomes[index] 
        + ' - ' + nota1 
        + ' - ' + nota2 
        + ' - ' + mediaFinal 
        + ' - ' + resultado);
}