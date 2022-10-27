// The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems.

function Mortgage(name) {
    this.name = name;
}

Mortgage.prototype = {
    applyFor: function (amount) {
        let result = 'approved'

        if (!new Bank().verify(this.name, amount)) {
            return "denied"
        } else if (!new Credit().get(this.name)) {
            return "denied"
        } else if (!new Background().check(amount)) {
            return "denied"
        }

        return '....'
    }
}

function Bank() {
    this.verify = function (name, amount) {
        return true
    }
}

function Credit() {
    this.get = function (name) {
        return true
    }
}

function Background() {
    this.check = function (amount) {
        return true
    }
}

var mort = new Mortgage('Bob');
mort.applyFor(10000);