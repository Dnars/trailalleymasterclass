class Queue {
    queue = [];

    // CHECK IF QUEUE IS EMPTY
    isQueueEmpty() {
        if (this.queue.length === 0) {
            return 'The queue is empty';
        }
    }

    // ADD TO QUEUE
    addToQueue(person) {
        this.queue = [...this.queue, person]
    }

    // REMOVE LAST PERSON FROM QUEUE
    removeFromQueue() {
        this.queue.splice(this.queue.length - 1, 1)
    }

    // SEE THE LAST PERSON ON THE QUEUE
    peek() {
        return this.queue[this.queue.length - 1]
    }

    // LENGTH OF QUEUE
    get length() {
        return this.queue.length
    }
}
