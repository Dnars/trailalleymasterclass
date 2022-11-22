class Queue {
    queue = [];

    // QUEUE VALIDATION
    validate(pos) {
        if (pos === 0) {
            return 'Sorry, ther is no 0 postion on the queue';
        }

        if (this.queue.length === 0) {
            return 'The queue is empty';
        }

        if (pos > this.queue.length) {
            return 'Sorry, the number of persons on the queue is ' + this.queue.length;
        }

        return false;
    }

    // CHECK IF QUEUE IS EMPTY
    isQueueEmpty() {
        if (this.queue.length === 0) {
            return 'The queue is empty';
        }
    }

    // ADD TO QUEUE
    addToQueue(person) {
        if(this.queue.includes(person)) {
            return 'Person on the queue already';
        }

        this.queue = [...this.queue, person]

        return person + ' has joined the queue';
    }

    // REMOVE FROM QUEUE
    removeFromQueue(pos = this.queue.length) {
        if (this.validate(pos)) {
            return this.validate(pos)
        }

        const personOnPos = this.queue[pos - 1];
        this.queue.splice(pos - 1, 1)

        return personOnPos + ' has been removed from the queue';
    }

    // SEE THE PERSON AT ANY POSITION ON THE QUEIE
    peek(pos = this.queue.length) {
        if(this.validate(pos)) {
            return this.validate(pos)
        }

        const personOnPos = this.queue[pos - 1];

        return `${personOnPos} is number ${pos} on the queue`;
    }

    // LENGTH OF QUEUE
    get length() {
        return this.queue.length
    }
}