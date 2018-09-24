const EventEmitter = require('events');

class Logger extends EventEmitter {

   log(msg) {
    console.log('logger ', msg);
    this.emit('messageLogged', {name: 'Tom', age: '58'});
  }
}

module.exports = Logger;
