//Medidor de Velocidade

verificarVelocidade(130);

function verificarVelocidade(vel){
    const velMAX = 70;
    const kmPorPonto = 5;
    if(vel <= velMAX){
        console.log("OK!");
    } else{
        const pontos = Math.floor((vel - velMAX)/kmPorPonto);
        if(pontos >= 12){
            console.log("Carteira Suspensa");
        } else{
            console.log("Pontos", pontos);
        }
    }
}