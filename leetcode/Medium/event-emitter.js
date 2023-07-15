class EventEmitter {
    eventsMap = new Map();

    subscribe(event, cb) {
        if (!this.eventsMap.has(event)) {
            this.eventsMap.set(event, [cb]);
        } else {
            this.eventsMap.set(event, [...this.eventsMap.get(event), cb]);
        }

        return {
            unsubscribe: () => {
                const filteredCbs = this.eventsMap
                    .get(event)
                    ?.filter((callback) => callback !== cb);

                this.eventsMap.set(event, filteredCbs);

                return undefined;
            },
        };
    }

    emit(event, args = []) {
        if (!this.eventsMap.get(event)?.length) {
            return [];
        }

        return this.eventsMap.get(event).reduce((acc, currCb) => {
            return [...acc, currCb.call(null, ...args)];
        }, []);
    }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
    return 99;
}

const sub = emitter.subscribe('onClick', onClickCallback);

console.log(emitter.emit('onClick')); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit('onClick')); // []
