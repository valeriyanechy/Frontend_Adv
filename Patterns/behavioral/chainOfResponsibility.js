// A Chain of Resposibility is a behavioral design pattern that allows requests to be passed sequentially through a chain of handlers.
// Each subsequent processor decides whether it can process the request itself and whether it should pass the request further down the chain.

function Request(amount) {
    this.amount = amount;
}

Request.prototype = {
    get(x) {
        return this;
    }
}

let req = new Request(121);
req.get(2).get(3).get(76)