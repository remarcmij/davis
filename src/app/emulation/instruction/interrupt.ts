import { CPU } from '../cpu';
import { MemoryView } from '../memory-view';
import { UnaryReadOperation } from './instruction';

export class Interrupt extends UnaryReadOperation {
  private number: MemoryView;

  execute(cpu: CPU): number {
    cpu.onInterrupt.emit(this.number.getValue());
    return cpu.getNextInstruction();
  }

  loadParameters(number: MemoryView): void {
    this.number = number;
  }
}
