// The Command pattern encapsulates actions as objects. 
// Command objects allow for loosely coupled systems by separating the objects that issue a request from the objects that actually process the request.

class MyMath {
    constructor(initValue = 0) {
        this.number = initValue
    }

    square() {
        return this.number ** 2
    }

    cube() {
        return this.number ** 3
    }
}

class Command {
    constructor(subject) {
        this.subject = subject
        this.commandsExecuted = []
    }

    executed(command) {
        this.commandsExecuted.push(command)
        return this.subject[command]()
    }
}

const x = new Command(new MyMath(2))
console.log(x.executed('square'))