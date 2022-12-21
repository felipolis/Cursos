let video = document.getElementById('video1');


//foco
let container = document.querySelector('.container');
let controle = document.querySelector('.controle');

container.addEventListener('mouseover', function(){
    controle.style.visibility = "visible";
    console.log("Apareceu");
})

container.addEventListener('mouseout', function(){
    controle.style.visibility = "hidden";
    console.log("Desapareceu");
})

//controles
function retroceder(){
    video.currentTime -= 15;
}

function avancar(){
    video.currentTime += 15;
}

function diminuir_vel(){
    video.playbackRate -= 0.1;
}

function aumentar_vel(){
    video.playbackRate += 0.1;
}

function play(){
    video.play();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}