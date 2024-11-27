class Queue{                   //The Queue class uses an array (this.items) to store the elements.
    constructor(){
        this.items = [];
    }

    enqueue(item){             //The enqueue method adds an item to the end of the array.
        this.items.push(item);
    }
    dequeue(){                 //The dequeue method removes the first item from the array and returns it. If the queue is empty, it returns undefined.
        if (this.isEmpty()){
            return undefined;
        }
        return this.items.shift();
    }
    peek(){                   //The peek method returns the first item without removing it.
        if (this.isEmpty()){
            return undefined;
        }
        return this.items[0];
    }
    isEmpty(){                    //The isEmpty method checks if the queue has any elements.
        return this.items.length === 0;
    } 
    size(){                       //The size method returns the number of elements in the queue.
        return this.items.length;
    }
    clear(){                      //The clear method resets the queue by setting the items array to an empty array.
        this.items = [];
    }

    static merge(queue1, queue2){   // Static method to merge two queues into a single queue

        const mergedQueue = new Queue();
        
        while (!queue1.isEmpty()){
            mergedQueue.enqueue(queue1.dequeue());
        }
        while (!queue2.isEmpty()){
            mergedQueue.enqueue(queue2.dequeue());
        }
        return mergedQueue;
    }
};

const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);

const queue2 = new Queue();
queue2.enqueue(3);
queue2.enqueue(4);

const mergedQueue = Queue.merge(queue1, queue2);
console.log(mergedQueue);  
 