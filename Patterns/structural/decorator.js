// The Decorator pattern extends (decorates) an object’s behavior dynamically. 
// The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. 
// Multiple decorators can add or override functionality to the original object.

function User(name) {
    this.name = name;
    this.say = function () {
        console.log(`Hello ${this.name}`)
    }
}

function DecoratedUser(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
    this.say = function () {
        return this.street
    }
}

let user = new User('Bob')
let decoratedUser = new DecoratedUser(user, 'Broadway', 'New York')