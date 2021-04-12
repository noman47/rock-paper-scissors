function getPlayerMove() {
    //sanitize user input
    const move = window.prompt("Make your move: ROCK PAPER or SCISSORS").toLowerCase();
    return move;
}

function getComputerMove() {
    //list of possible moves
    const moves = ["rock", "paper", "scissors"];
    //generate random number to make a move
    const move = moves[Math.floor(Math.random() * moves.length)];
    return move;
}

function comparison(player, computer) {
    if(player === computer) {
        console.log("TIE");
    }
    if(player == "rock") {
        if(computer == "scissors") {
            console.log("You win!");
        }
        if(computer == "paper") {
            console.log("You lose!");
        }
    }
    if(player == "paper") {
        if(computer == "rock") {
            console.log("You win!");
        }
        if(computer == "scissors") {
            console.log("You lose!");
        }
    }
    if(player == "scissors") {
        if(computer == "paper") {
            console.log("You win!");
        }
        if(computer == "rock") {
            console.log("You lose!");
        }
    }
}

function game() {

    for(let i = 0; i < 5; i++) {
        const player = getPlayerMove();
        console.log("Player chose: " + player);
        const computer = getComputerMove();
        console.log("Computer chose: " + computer);
        comparison(player, computer);
    }
}

game();