const logEvent = require('./logEvent')
const EventEmitter = require('events')

class MyEvent extends EventEmitter { }

const myEvent = new MyEvent()

myEvent.on('log', (msg) => logEvent(msg))

setTimeout(() => {
    myEvent.emit('log', 'Event emitted!')
}, 2000)