
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        square.addEventListener("click", handleClick);
    })

})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(() => {
            alert("Game Over! - O vencedor foi o " + playerTime);
        }, 100);

    }
    
    updateSquare(position);
}

function updateSquare(position){

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;


}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        let position = square.id;fon
        let symbol = board[position];

        if(Symbol != ""){
            square.innerHTML = `<div class="${symbol}"></div>`;
        }
    })

}

function restartGame(){
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    symbols = ["o", "x"];
    gameOver = false;

    updateSquares();
}