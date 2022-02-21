let tela = document.getElementById('tela');
let ctx = tela.getContext('2d');

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    anguloInicial: 0,
    anguloFinal: 0,
    antiHorario: false,
}

function drawCircle(c){

    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = 'beige';
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'red';
    ctx.arc(c.x, c.y, c.raio, c.anguloInicial, c.anguloFinal, c.antiHorario);
    ctx.stroke();
    ctx.fill();
}

setInterval(function(){
    if(circle.anguloFinal < 2 * Math.PI){
        circle.anguloFinal += 0.1;
        circle.x += 1;
    }
    drawCircle(circle);
}, 10);