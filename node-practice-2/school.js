const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class Started');

        // rase event when bell rings
        // raise an events
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 1000);
    }
}



module.exports = School;