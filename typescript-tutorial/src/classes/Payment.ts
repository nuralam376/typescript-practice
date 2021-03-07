import { hasFormatter } from "../interfaces/hasFormatter";

class Payment implements hasFormatter {
  constructor(
    readonly receipient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.receipient} is owed for ${this.details} for ${this.amount}`;
  }
}

export default Payment;
