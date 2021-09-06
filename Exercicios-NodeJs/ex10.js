//Numeros primos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let num = 2; num <= limite; num++){
        let ehPrimo = true;
        for(let divisor = 2; divisor < num; divisor++){
            if(num % divisor === 0){
                ehPrimo = false;
                break;
            }
        }
        if(ehPrimo) console.log(num);
    }
}