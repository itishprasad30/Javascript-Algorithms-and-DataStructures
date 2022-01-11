/*
class LinkedList {
  constructor() {
    // 1st excute when new called
    this.head = null; // first element
    this.tail = null; // last element
  }
  add(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }
  insertAfter(value, afterVal) {
    const existingNode = this.find(afterVal);
    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return console.log("no node found");
    }
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }
    return null;
  }

  toArray() {
    const element = [];
    let curNode = this.head;
    while (curNode) {
      element.push(curNode);
      curNode = curNode.next;
    }
    return element;
  }
}

const linkedList1 = new LinkedList();
console.log(linkedList1);

linkedList1.add(12);
linkedList1.add("abel");
linkedList1.add("hello");
linkedList1.add("hello");
linkedList1.add("the weeknd");
linkedList1.add(32.11);

linkedList1.prepend("Itish prasad sahoo");

console.log(linkedList1.toArray());
linkedList1.delete("hello");
linkedList1.delete(32.11);

const findRes = linkedList1.find("Itish prasad sahoo");
console.log(findRes);

linkedList1.insertAfter("new-val-1", 12);
console.log(linkedList1.toArray());

console.log(linkedList1);

*/

//////////////
// Linked List by Node

// const n1 = {
//   data: 100,
// };
// const n2 = {
//   data: 200,
// };

// n1.next = n2;

// console.log(n1);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const nn = new Node(100);
// console.log(nn);

class LinkedListNew {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // print node data

  printData(data) {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
  }
}

const ll = new LinkedListNew();
console.log(ll);

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.printData();
console.log(ll);
