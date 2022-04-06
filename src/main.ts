import './style.css'

const gameSize = 3;

type Field = "X" | "O" | ""

const fieldContainer = document.querySelector("#field-container") as HTMLElement
fieldContainer.style.gridTemplateColumns = `repeat(${gameSize},1fr)`
fieldContainer.style.gridTemplateRows = `repeat(${gameSize},1fr)`

function initGameBoard(): Field[][] {
    return Array.from(Array(gameSize), () => {
        return new Array(gameSize).fill("");
    })

}

const gameBoard: Field[][] = initGameBoard();
generateHTMLGameBoard()

function generateHTMLGameBoard() {
    gameBoard.forEach((row, rowIndex) => {
        row.forEach((_field, colIndex) => {
            const fieldElement = document.createElement("div");
            fieldElement.classList.add("field")
            fieldContainer?.appendChild(fieldElement)
            fieldElement.innerHTML = gameBoard[rowIndex][colIndex]
            fieldElement.style.display="grid"
            fieldElement.style.placeContent= "center"
            fieldElement.addEventListener("click", () => {
                takeTurn(rowIndex, colIndex)
            })
        })
    })
}


let playersTurn: "X" | "O" = "O"

function takeTurn(rowIndex: number, colIndex: number) {
    gameBoard[rowIndex][colIndex] = playersTurn;
    console.log(gameBoard[rowIndex][colIndex])
    playersTurn = playersTurn === "X" ? "O" : "X"
    render()
}

function render() {
    fieldContainer.innerHTML = "";
    generateHTMLGameBoard()
}