import { Player } from './../model/Player.model';
import { GameStatus } from './../model/GameStatus';
import { CellNumberGeneratorService } from './../services/cell-number-generator.service';
import { GameBoardService } from './../services/game-board.service';
import { PlayerTurnService } from './../services/player-turn.service';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  cellValue: string = ' ';
  r: number = 1;
  c: number = 1;

  constructor(
    private playerTurnService: PlayerTurnService,
    private gameBoardService: GameBoardService,
    private cellNumberGeneratorService: CellNumberGeneratorService
  ) {
    let cellPosition: number[] = cellNumberGeneratorService.getCellPosition();
    this.r = cellPosition[0];
    this.c = cellPosition[1];
  }

  @HostListener('click') onClick() {
    if (
      this.cellValue === ' ' &&
      GameStatus.IN_PROGRESS == this.gameBoardService.getGameStatus()
    ) {
      let player = this.playerTurnService.getNextTurn();
      this.cellValue = player.symbol;
      this.gameBoardService.updatPosition(this.r, this.c, this.cellValue);
      console.log(
        'updated cell [' + this.r + '] [' + this.c + '] with ' + this.cellValue
      );
      this.processGameStatus(player);
    }
  }

  private processGameStatus(player: Player): void {
    let gameStatus = this.gameBoardService.getGameStatus();
    switch (gameStatus) {
      case GameStatus.WON: {
        alert(player.name + ' is winner');
        break;
      }
      case GameStatus.DRAWN: {
        alert('game completed without result');
        break;
      }
    }
  }

  ngOnInit(): void {}
}
