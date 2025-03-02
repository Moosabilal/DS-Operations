class Stack{
    constructor(){
        this.item = []
    }
    push(value){
        this.item.push(value)
    }
    pop(){
        if(this.isEmpty()) console.log('stack is empty')
        else this.item.pop()
    }
    display(){
        if(this.isEmpty()) console.log('stack is empty')
        else console.log(this.item.join(' -> '))
    }
    isEmpty(){
        return this.item.length == 0
    }
    getSize(){
        console.log(this.item.length)
    }
}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.isEmpty())
stack.display()
stack.pop()
stack.display()
stack.getSize()

