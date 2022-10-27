// The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs.

function Click() {
    this.handler = [];
}

Click.prototype = {
    subscribe(fn) {
        this.handler.push(fn);
    },

    unsubscribe(fn) {
        return this.handler.filter(v => v === fn)
    },

    fire(fn) {
        this.handler.forEach(v => {
            if (v === fn) {
                v()
            }
        })
    }
}