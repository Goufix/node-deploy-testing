export default class CustomException extends Error {
  public code: number;

  public details?: unknown[];

  constructor(message: string, code: number) {
    super(message);
    this.message = message;
    this.code = code;
  }
}
