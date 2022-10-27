// The Adapter pattern translates one interface (an object‘s properties and methods) to another. 
// Adapters allows programming components to work together that otherwise wouldn't because of mismatched interfaces.

class OldCalculator {
    operations(a, b, operation) {
        switch (operation) {
            case 'add': return a + b
            case 'sub': return a - b
            default: return NaN
        }
    }
}

class NewCalculator {
    add(a, b) {
        return a + b
    }

    sub(a, b) {
        return a - b
    }
}

class CalculatorAdapter {
    constructor() {
        this.calc = new NewCalculator()
    }

    operations(a, b, operation) {
        switch (operation) {
            case 'add': return this.calc.add(a, b)
            case 'sub': return this.calc.sub(a, b)
            default: return NaN
        }
    }
}