import { CPU } from '../cpu';
import { Instruction } from './instruction';

export class Halt extends Instruction {
  execute(cpu: CPU): number {
    cpu.halt();
    return cpu.eip;
  }
}
