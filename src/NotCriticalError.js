export default class NotCriticalError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotCriticalError";
    this.message = "\x1b[31m" + message + "\x1b[0m";
  }
}
