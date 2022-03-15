import { GameStatus } from './../model/GameStatus';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameBoardService {
  constructor() {}

  private positions: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  public updatPosition(x: number, y: number, symbol: string) {
    console.log('x= ' + x + 'y ' + y);
    this.positions[x][y] = symbol;
  }

  public getGameStatus(): string {
    return this.isGameWon()
      ? GameStatus.WON
      : this.isGameCompleted()
      ? GameStatus.DRAWN
      : GameStatus.IN_PROGRESS;
  }

  private isGameCompleted(): boolean {
    let r = 0;
    let c = 0;
    for (r = 0; r < 3; r++) {
      for (c = 0; c < 3; c++) {
        if (this.positions[r][c] == '') return false;
        console.log('r ' + r + 'c ' + c + ' symbol ' + this.positions[r][c]);
      }
    }
    return true;
  }

  private isGameWon(): boolean {
    return (
      this.rowWiseWinnerCheck() ||
      this.columnWiseWinnerCheck() ||
      this.diagonalWinnerCheck()
    );
  }

  private rowWiseWinnerCheck(): boolean {
    let c: number = 0;
    let r: number = 0;
    for (r = 0; r < 3; r++) {
      if (
        this.positions[r][c] != '' &&
        this.positions[r][c + 1] == this.positions[r][c] &&
        this.positions[r][c + 2] == this.positions[r][c]
      ) {
        return true;
      }
    }
    return false;
  }

  private columnWiseWinnerCheck(): boolean {
    let c: number = 0;
    let r: number = 0;
    for (c = 0; c < 3; c++) {
      if (
        this.positions[r][c] != '' &&
        this.positions[r + 1][c] == this.positions[r][c] &&
        this.positions[r + 2][c] == this.positions[r][c]
      ) {
        return true;
      }
    }
    return false;
  }

  private diagonalWinnerCheck(): boolean {
    let c: number = 0;
    let r: number = 0;
    if (
      this.positions[r][c] != '' &&
      this.positions[r + 1][c + 1] == this.positions[r][c] &&
      this.positions[r + 2][c + 2] == this.positions[r][c]
    ) {
      return true;
    }

    c = 2;
    r = 0;

    if (
      this.positions[r][c] != '' &&
      this.positions[r + 1][c - 1] == this.positions[r][c] &&
      this.positions[r + 2][c - 2] == this.positions[r][c]
    ) {
      return true;
    }

    return false;
  }
}
