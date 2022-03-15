import { Player } from './../model/Player.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerTurnService {
  private players: Player[] = [];
  private count: number = 0;
  constructor() {
    this.players = [new Player('Player-X', 'X'), new Player('Player-O', 'O')];
  }

  public getNextTurn(): Player {
    return this.players[this.count++ % this.players.length];
  }
}
