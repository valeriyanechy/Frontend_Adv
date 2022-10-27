// A Factory Method creates new objects as instructed by the client. 
// One way to create objects in JavaScript is by invoking a constructor function with the new operator.

function Factory() {
    this.createEmployee = function (type) {
        let employee;
        if (type === 'fulltime') {
            employee = new FullTime();
        }
        if (type === 'parttime') {
            employee = new FullTime();
        }
        if (type === 'temporary') {
            employee = new FullTime();
        }
        if (type === 'contractor') {
            employee = new FullTime();
        }
        return employee
    }
}

function FullTime() {
    this.hourly = '20$'
}

function PartTime() {
    this.hourly = '15$'
}

function Temporary() {
    this.hourly = '50$'
}

function Contractor() {
    this.hourly = '22$'
}

let factory = new Factory();
factory.createEmployee('fulltime')