export class Player {
  private _name: string;
  private _symbol: string;

  constructor(name: string, symbol: string) {
    this._name = name;
    this._symbol = symbol;
  }

  public get name(): string {
    return this._name;
  }

  public get symbol(): string {
    return this._symbol;
  }
}
