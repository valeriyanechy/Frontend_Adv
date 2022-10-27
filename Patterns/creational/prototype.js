// The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or example - object.

const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels} wheels, my owner ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: "Lera"
    }
})

console.log(carWithOwner.__proto__ === car)