var Payment = /** @class */ (function () {
    function Payment(receipient, details, amount) {
        this.receipient = receipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.receipient + " is owed for " + this.details + " for " + this.amount;
    };
    return Payment;
}());
export default Payment;
