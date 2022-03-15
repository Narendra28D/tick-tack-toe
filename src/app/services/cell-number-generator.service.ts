import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CellNumberGeneratorService {
  private rowsize=3;
  private colSize=3;
  private count =0;
  constructor() { }

  public getCellPosition(): number[]{
      let cellPos=[];
      cellPos.push(Math.floor(this.count/this.colSize));
      cellPos.push(this.count%this.rowsize);
      this.count++;
      return cellPos;
  }
}
