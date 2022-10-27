// The Singleton Pattern limits the number of instances of a particular object to just one. 
// This single instance is called the singleton.

function Universe() {
    let instance = this;
    this.start_time = 0;
    this.bang = 'Big';

    Universe = function () {
        return instance;
    }
}

let uni1 = new Universe();
let uni2 = new Universe();
console.log(uni1 === uni2)