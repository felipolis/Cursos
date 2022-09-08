let tela = document.getElementById('tela');
let ctx = tela.getContext('2d');

let x = 250;
let y = 250;
let raio = 100;
let anguloInicial = 0;          // Em radianos
let anguloFinal = 2 * Math.PI;  // Em radianos

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'red';

ctx.arc(x, y, raio, anguloInicial, anguloFinal);

ctx.stroke();
ctx.fill();