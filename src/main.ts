import './style.css'

const gameSize = 5;

type Field = "X" | "O" | ""

function initGameBoard(): Field[][] {
    return Array.from(Array(gameSize), () => {
       return new Array(gameSize).fill("");
   })
}

const gameBoard: Field[][] = initGameBoard();

function generateHTMLGameBoard() {
    //GameBoard Array wurde initialisiert --> muss ans HTML übergeben werden, sodass ein Spielfeld sichtbar wird
}

let playersTurn: "X" | "O" = "O"

const fields = document.getElementsByClassName("inner-field")
Array.from(fields).forEach((field, index) => {
    field.addEventListener("click", () => {
        takeTurn(index)
    })
})


function takeTurn(index: number) {
    gameBoard[index][index] = playersTurn;
    console.log(gameBoard[index][index])
    playersTurn = playersTurn === "X" ? "O" : "X"
    render()
}

function render() {
    Array.from(fields).forEach((field, index) => {
        field.innerHTML = gameBoard[index][index]
    })
}