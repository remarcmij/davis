import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import { MemoryBlock } from '../../emulation/memory-block';

@Component({
  selector: 'memory',
  templateUrl: './memory.html'
})
export class MemoryComponent {
  private _ascii = false;

  @Input() memory: MemoryBlock = null;
  @Input() wordSize = 1;
  @Input() width = 10;

  @Input() set ascii(value: boolean) {
    if (value) {
      this.wordSize = 1;
    }

    this._ascii = value;
  }
  get ascii(): boolean {
    return this._ascii;
  }

  private getRowCount(): number {
    return Math.ceil(this.memory.size / this.width / this.wordSize);
  }
  private createRange(count: number): number[] {
    return _.range(count);
  }
  private createAddress(row: number, col: number): number {
    return row * this.width * this.wordSize + col * this.wordSize;
  }
  private getCellValue(address: number): string {
    const value: number = this.memory.load(address, this.wordSize).getValue();

    if (this._ascii) {
      return String.fromCharCode(value);
    } else {
      return value.toString();
    }
  }
}
