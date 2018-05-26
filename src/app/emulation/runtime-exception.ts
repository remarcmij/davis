export class RuntimeException extends Error {
  constructor(public message: string = '') {
    super(message);
    Object.setPrototypeOf(this, RuntimeException.prototype);
  }
}
