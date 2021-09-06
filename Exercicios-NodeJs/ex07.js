//Soma dos multiplos de 3 e 5

somar(10);
function somar(limite){
    let multTres = 0;
    let multCinco = 0;
    for(let i = 0; i <= limite; i++){
        if(i % 3 === 0){
            multTres += i;
        }
        if(i % 5 === 0){
            multCinco += i;
        }
    }
    console.log(multTres + multCinco);
}