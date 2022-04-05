import './style.css'


type Field = "X" | "O" | ""
const gameBoard: Field[] = [
    "X",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];


let playersTurn: "X" | "O" = "O"

const fields = document.getElementsByClassName("inner-field")
Array.from(fields).forEach((field, index) => {
    field.addEventListener("click", () => {
        takeTurn(index)
    })
})


function takeTurn(index: number) {
    gameBoard[index] = playersTurn;
    console.log(gameBoard[index])
    playersTurn = playersTurn === "X" ? "O" : "X"
    render()
}

function render() {
    Array.from(fields).forEach((field, index) => {
        field.innerHTML = gameBoard[index]
    })
}