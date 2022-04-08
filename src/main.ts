import "./style.css";
import { TicTacToeUtils } from "./TicTacToeUtils";
import { Field } from "./Field";

const gameSize = 3;

const winnerSpan = document.querySelector(".winner");

const fieldContainer = document.querySelector(
  "#field-container"
) as HTMLElement;
fieldContainer.style.gridTemplateColumns = `repeat(${gameSize},1fr)`;
fieldContainer.style.gridTemplateRows = `repeat(${gameSize},1fr)`;

function initGameBoard(): Field[][] {
  return Array.from(Array(gameSize), () => {
    return new Array(gameSize).fill("");
  });
}

const gameBoard: Field[][] = initGameBoard();
generateHTMLGameBoard();

function generateHTMLGameBoard() {
  gameBoard.forEach((row, rowIndex) => {
    row.forEach((_field, colIndex) => {
      const fieldElement = document.createElement("div");
      fieldElement.classList.add("field");
      fieldContainer?.appendChild(fieldElement);
      fieldElement.innerHTML = gameBoard[rowIndex][colIndex];
      fieldElement.style.display = "grid";
      fieldElement.style.placeContent = "center";
      fieldElement.addEventListener("click", () => {
        if (gameBoard[rowIndex][colIndex] !== "" || checkWinner() !== "") {
          return;
        }
        takeTurn(rowIndex, colIndex);
      });
    });
  });
}

let playersTurn: "X" | "O" = "O";

function takeTurn(rowIndex: number, colIndex: number) {
  gameBoard[rowIndex][colIndex] = playersTurn;
  console.log(gameBoard[rowIndex][colIndex]);
  playersTurn = playersTurn === "X" ? "O" : "X";
  render();
}

function render() {
  fieldContainer.innerHTML = "";
  const winner = checkWinner();
  if (winner === "X") {
    winnerSpan!.innerHTML = "Winner: X";
  } else if (winner === "O") {
    winnerSpan!.innerHTML = "Winner: O";
  }
  generateHTMLGameBoard();
}

function checkWinner(): Field {
  const verticaly = TicTacToeUtils.checkVerticaly(gameBoard);
  const horizontal = TicTacToeUtils.checkHorizontaly(gameBoard);
  const diagonal = TicTacToeUtils.diagonal(gameBoard);
  if (verticaly === "X" || horizontal === "X") {
    return "X";
  } else if (verticaly === "O" || horizontal === "O") {
    return "O";
  } else if (diagonal === "X") {
    return "X";
  } else if (diagonal === "O") {
    return "O";
  }
  return "";
}
