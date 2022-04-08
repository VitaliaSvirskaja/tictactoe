import { describe, expect, it } from "vitest";
import { Field } from "./Field";
import { TicTacToeUtils } from "./TicTacToeUtils";

describe("TicTacToeUtils", function () {
  it("should check if all values in first horizontal line are equal ", function () {
    const input: Field[][] = [
      ["X", "X", "X"],
      ["", "O", ""],
      ["O", "", ""],
    ];
    const result = TicTacToeUtils.checkHorizontaly(input);
    expect(result).toEqual("X");
  });

  it("should check if all values in first horizontal line are equal ", function () {
    const input: Field[][] = [
      ["X", "", "X"],
      ["", "O", ""],
      ["O", "O", "O"],
    ];
    const result = TicTacToeUtils.checkHorizontaly(input);
    expect(result).toEqual("O");
  });

  it("should check if all values in diagonal line (top left to bottom right) are equal ", function () {
    const input: Field[][] = [
      ["O", "", ""],
      ["", "X", ""],
      ["", "", "O"],
    ];
    const result = TicTacToeUtils.diagonal(input);
    expect(result).toEqual("");
  });

  it("should check if all values in diagonal line (top left to bottom right) are equal ", function () {
    const input: Field[][] = [
      ["X", "", ""],
      ["", "X", ""],
      ["", "", "X"],
    ];
    const result = TicTacToeUtils.diagonal(input);
    expect(result).toEqual("X");
  });

  it("should check if all values in first vertical line are equal ", function () {
    const input: Field[][] = [
      ["O", "", ""],
      ["O", "", ""],
      ["O", "", ""],
    ];

    const result = TicTacToeUtils.checkVerticaly(input);
    expect(result).toEqual("O");
  });
});
