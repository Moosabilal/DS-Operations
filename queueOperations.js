class Queue{
    constructor(){
        this.item = []
    }
    isEmpty(){
        return this.item.length == 0
    }
    getSize(){
        console.log(this.item.length)
    }
    enqueue(value){
        this.item.unshift(value)
    }
    dequeue(){
        if(this.isEmpty()) console.log('queue is empty')
        else return this.item.pop()
    }
    display(){
        console.log(this.item.join(' -> '))
    }
} 
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.display()
queue.dequeue()
queue.display()
queue.getSize()