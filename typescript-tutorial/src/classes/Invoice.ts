class Invoice {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number //   c: string, d: string, a: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

export default Invoice;
