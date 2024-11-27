class Stack {
    constructor(maxSize){        //Initializes the stack with a maximum size and an empty array for items.
        this.maxSize = maxSize;
        this.items = [];
    }
    push(item){                  //Adds an item to the stack if it is not full; otherwise, it returns an error message.
        if (Stack.isStackFull(this, this.maxSize)) {
            return "Error: Stack is full";
        }
        this.items.push(item);
    }
    pop(){                       //Removes and returns the top item from the stack, or returns undefined if the stack is empty.
        return this.items.pop();
    }
    isEmpty(){                   //Checks if the stack has no items.
        return this.items.length === 0;
    }
    length(){                    //Returns the current number of items in the stack.
        return this.items.length;
    }
    peek(){                      // Returns the top item without removing it, or undefined if the stack is empty.
        return this.isEmpty() ? undefined : this.items[this.items.length - 1];
    }
    clear(){                     //Resets the stack to its initial empty state.
        this.items = [];
    }

    static isStackFull(stackInstance, maxSize){  //Checks if the stack has reached its maximum capacity.
        return stackInstance.length() >= maxSize;
    }
};

 
const stack = new Stack(3);
console.log(stack); 
console.log(stack.push(1));  
console.log(stack.push(2));  
console.log(stack.push(3));  
console.log(stack.push(4)); // Error: Stack is full
console.log(stack.peek());   // 3
console.log(stack.pop());    // 3
console.log(stack.length());  // 2
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true