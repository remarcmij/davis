import { CPU } from '../cpu';
import { RuntimeException } from '../runtime-exception';
import { BinaryOperation, UnaryReadOperation, UnaryWriteOperation } from './instruction';

export class Add extends BinaryOperation {
  execute(cpu: CPU): number {
    this.target.setValue(cpu.alu.add(this.target.getValue(), this.source.getValue()));
    return cpu.getNextInstruction();
  }
}
export class AddWithCarry extends Add {
  execute(cpu: CPU): number {
    this.target.setValue(cpu.alu.add(this.target.getValue(), this.source.getValue(), cpu.statusWord.carry ? 1 : 0));
    return cpu.getNextInstruction();
  }
}

export class Sub extends BinaryOperation {
  execute(cpu: CPU): number {
    this.target.setValue(cpu.alu.sub(this.target.getValue(), this.source.getValue()));
    return cpu.getNextInstruction();
  }
}
export class SubWithBorrow extends Sub {
  execute(cpu: CPU): number {
    this.target.setValue(cpu.alu.sub(this.target.getValue(), this.source.getValue(), cpu.statusWord.carry ? 1 : 0));
    return cpu.getNextInstruction();
  }
}

export class Increment extends UnaryWriteOperation {
  execute(cpu: CPU): number {
    this.target.setValue(cpu.alu.inc(this.target.getValue()));
    return cpu.getNextInstruction();
  }
}
export class Decrement extends UnaryWriteOperation {
  execute(cpu: CPU): number {
    this.target.setValue(cpu.alu.dec(this.target.getValue()));
    return cpu.getNextInstruction();
  }
}

export class DivideSigned extends UnaryReadOperation {
  public execute(cpu: CPU): number {
    if (this.target.getValue() === 0) {
      throw new RuntimeException('Division by zero');
    }

    const edx = cpu.getRegisterByName('EDX').getValue();
    const eax = cpu.getRegisterByName('EAX').getValue();

    const value: number = cpu.alu.extend64bit(eax, edx);
    const result: { value: number, remainder: number } = cpu.alu.idivide(value, this.target.getValue());

    cpu.getRegisterByName('EDX').setValue(result.remainder);
    cpu.getRegisterByName('EAX').setValue(result.value);

    return cpu.getNextInstruction();
  }
}
export class MultiplySigned extends UnaryReadOperation {
  public execute(cpu: CPU): number {
    const eax = cpu.getRegisterByName('EAX').getValue();
    const result: { lowerHalf: number, upperHalf: number } = cpu.alu.imultiply(eax, this.target.getValue());

    cpu.getRegisterByName('EDX').setValue(result.upperHalf);
    cpu.getRegisterByName('EAX').setValue(result.lowerHalf);

    return cpu.getNextInstruction();
  }
}
