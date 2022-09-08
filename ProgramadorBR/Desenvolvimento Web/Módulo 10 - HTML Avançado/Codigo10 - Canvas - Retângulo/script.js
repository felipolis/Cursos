let tela = document.getElementById('tela');
let ctx = tela.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 200);

ctx.strokeStyle = 'red';
ctx.strokeRect(200, 10, 100, 200);

ctx.rect(350, 10, 100, 200);
ctx.fillStyle = 'green';
ctx.strokeStyle = 'yellow';
ctx.lineWidth = 5;
ctx.fill();
ctx.stroke();

ctx.clearRect(15, 15, 30, 30);