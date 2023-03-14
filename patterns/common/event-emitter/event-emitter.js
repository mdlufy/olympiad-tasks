/*  
Пример использования:

    const emitter = new EventEmitter();
    let subscription;

    const subscribeButton = document.querySelector(".sub-btn");
    const unsubscribeButton = document.querySelector(".unsub-btn");
    const clickButton = document.querySelector(".click-btn");


    clickButton.addEventListener('click', function (event) {
        emitter.emit('event: click', { data: 'hello' });
    });


    subscribeButton.addEventListener('click', () => {
        subscription = emitter.subscribe('event: click', { data } => {
            console.log(data);
        }); 
    });

    unsubscribeButton.addEventListener('click', () => {
        subscription();
    });

*/

class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return () => {
            this.events[eventName] = this.events[eventName].filter(
                (cb) => cb !== callback
            );
        };
    }

    emit(eventName, value) {
        const event = this.events[eventName];

        if (!event) {
            return;
        }

        event.forEach((callback) => {
            callback.call(null, value);
        });
    }
}

export default EventEmitter;
