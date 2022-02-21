let tela = document.getElementById('tela');
let ctx = tela.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'blue';
ctx.moveTo(10, 10);
ctx.lineTo(400, 300);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'green';
ctx.moveTo(50, 10);
ctx.lineTo(300, 300);
ctx.lineTo(200, 300);
ctx.closePath();
ctx.stroke();
ctx.fill();
