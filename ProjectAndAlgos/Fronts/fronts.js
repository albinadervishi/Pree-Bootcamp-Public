class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    addFront(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      return this.head;
    }
  
    removeFront() {
      if (this.head === null) {
        return null;
      }
      const removedNode = this.head;
      this.head = this.head.next;
      removedNode.next = null;
      return this.head;
    }
  
    front() {
      if (this.head === null) {
        return null;
      }
      return this.head.data;
    }
  }
  
  const SLL1 = new SLL();
  console.log(SLL1.addFront(18));
  console.log(SLL1.addFront(5));
  console.log(SLL1.addFront(73));
  console.log(SLL1.removeFront());
  console.log(SLL1.removeFront());
  
  console.log(SLL1.front());
  console.log(SLL1.removeFront());
  console.log(SLL1.front());