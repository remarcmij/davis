import { Component } from '@angular/core';

@Component({
  selector: 'console',
  templateUrl: './console.html'
})
export class ConsoleComponent {
  private value = '';

  public print(value: string) {
    this.value += value;
  }

  private clear() {
    this.value = '';
  }
}
