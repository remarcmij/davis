export class StatusWord {
  private _carry = false;
  private _zero = false;
  private _overflow = false;
  private _signum = false;
  private _parity = false;
  private _direction = false;

  get carry(): boolean {
    return this._carry;
  }
  set carry(value: boolean) {
    this._carry = value;
  }

  get zero(): boolean {
    return this._zero;
  }
  set zero(value: boolean) {
    this._zero = value;
  }

  get overflow(): boolean {
    return this._overflow;
  }
  set overflow(value: boolean) {
    this._overflow = value;
  }

  get signum(): boolean {
    return this._signum;
  }
  set signum(value: boolean) {
    this._signum = value;
  }

  get parity(): boolean {
    return this._parity;
  }

  set parity(value: boolean) {
    this._parity = value;
  }

  get direction(): boolean {
    return this._direction;
  }
  set direction(value: boolean) {
    this._direction = value;
  }

  toString(): string {
    return '[CF: ' + this.carry + ', ZF: ' + this.zero + ', OF: ' + this.overflow
      + ' SF: ' + this.signum + ', DF: ' + this.direction + ']';
  }
}
