class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const node = new Node(10)
// console.log(node)

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  // adding new node to last

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // adding new node to beginning of list
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNodenewNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
}

const node = new LinkedList(10);
node.push(11);
node.unshift(15);
console.log(node);
