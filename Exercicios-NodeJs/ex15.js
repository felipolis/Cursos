//Faixa de preço

//primeira opcao
let faixas = [
    {toolTip: 'até R$700 reais', minimo: 0, maximo: 700},
    {toolTip: 'de R$700 a R$1000 reais', minimo: 700, maximo: 1000},
    {toolTip: 'R$1000 reais ou mais', minimo: 1000, maximo: 999999999}
];
console.log(faixas);

//segunda opcao
function criarFaixaPreco(toolTip, minimo, maximo){
    return {
        toolTip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a', 1, 100),
    criarFaixaPreco('b', 100, 1000),
    criarFaixaPreco('c', 1000, 1000),
]
console.log(faixas2);

//terceira opcao

function FaixaPreco(toolTip, minimo, maximo){
    this.toolTip = toolTip,
    this.minimo = minimo,
    this.maximo = maximo
};

let faixas3 = [
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('e', 20, 30),
    new FaixaPreco('f', 30, 40),
];

console.log(faixas3);