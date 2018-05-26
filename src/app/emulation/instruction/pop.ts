import { CPU } from '../cpu';
import { UnaryWriteOperation } from './instruction';

export class Pop extends UnaryWriteOperation {
  execute(cpu: CPU): number {
    this.target.setValue(cpu.pop());
    return cpu.getNextInstruction();
  }
}
