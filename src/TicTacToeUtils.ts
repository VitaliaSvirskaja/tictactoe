import { Field } from "./Field";

export const TicTacToeUtils = {
  checkHorizontaly: checkHorizontaly,
  checkVerticaly: checkVerticaly,
  diagonal: diagonal,
};

function checkHorizontaly(input: Field[][]): Field {
  if (input[0][0] === input[0][1] && input[0][1] === input[0][2]) {
    return input[0][0];
  } else if (input[1][0] === input[1][1] && input[1][1] === input[1][2]) {
    return input[1][0];
  } else if (input[2][0] === input[2][1] && input[2][1] === input[2][2]) {
    return input[2][0];
  }
  return "";
}

function checkVerticaly(input: Field[][]) {
  if (input[0][0] === input[1][0] && input[1][0] === input[2][0]) {
    return input[0][0];
  } else if (input[0][1] === input[1][1] && input[1][1] === input[2][1]) {
    return input[0][1];
  } else if (input[0][2] === input[1][2] && input[1][2] === input[2][2]) {
    return input[0][2];
  }
  return "";
}

function diagonal(input: Field[][]) {
  if (input[0][0] === input[1][1] && input[1][1] === input[2][2]) {
    return input[0][0];
  } else if (input[0][2] === input[1][1] && input[1][1] === input[2][0]) {
    return input[0][2];
  }
  return "";
}
