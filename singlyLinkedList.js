//piece of data - val
//reference to the next node //#endregion

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    // push is a function inside of a the class... each function is a mechanism of the class 
    //push, pushes things to the end of a list 
    push(val){
        //when there is neithere a head nor a tail both head and tail will point to the variable newNode
        var newNode = new Node(val);
        if(!this.head){
            this.head= newNode;
            //both tail and head points to the var newNode in memory
            this.tail = this.head;
        }else{
            //when an item is inserted newNode becomes the tail and the next tail.... then moves the tail marker over. and the one after that.... 
            this.tail.next =newNode;
            this.tial = newNode;
        }
        //adds to the length of the lists and returns the value
        this.length++;
        return this;
    }
    //removes a node from the end of a linked list
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next){
            newTail = current;
            current = current.next;

        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--
        if (this.length===0){
            this.tail = null;
    }
    return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length ++;
        return this;
    }
    get(index){
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head; 
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
        
    }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
    insert(index, val){
        if (index < 0 || index . this.length) return false;
        if(index === this.length)return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++; 
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.legnth ) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length ; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}








var list = new singlyLinkedList();
list.push("Hello")
list.push("goodbye")