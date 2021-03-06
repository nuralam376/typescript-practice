var Invoice = /** @class */ (function () {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    function Invoice(client, details, amount //   c: string, d: string, a: number
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
export default Invoice;
