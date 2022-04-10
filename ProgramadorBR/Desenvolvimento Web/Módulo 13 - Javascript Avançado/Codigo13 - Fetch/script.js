let url = "https://economia.awesomeapi.com.br/last/USD-BRL";


/* fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data);
    }) */


function converter(){
    let input = document.getElementById("valor");
    let valor = input.value;
    
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let rate = data.USD.high;
            let resultado = `${valor} dolares = ${rate * valor} reais`
            document.getElementById("resultado").innerHTML = resultado;
            
        })
    
}