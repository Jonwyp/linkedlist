class LinkedList {
  constructor() {
    this.head = null;
  }

  checkNode(node) {
    if (!(node instanceof Node)) {
      throw new Error("not a node");
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head === null) {
      return null;
    }
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }

  unshift(node) {
    this.checkNode(node);
    node.next = this.head;
    this.head = node;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    const shiftedNode = this.head;
    this.head = this.head.next;
    return shiftedNode;
  }

  pop() {
    const lastNode = this.getLast();
    let node = this.head;
    if (node === lastNode) {
      this.head = null;
    }
    while (node !== lastNode) {
      if (node.next === lastNode) {
        node.next = null;
        break;
      }
      node = node.next;
    }
    return lastNode;
  }

  push(node) {
    this.checkNode(node);
    if (this.head === null) {
      return this.unshift(node);
    }
    const lastNode = this.getLast();
    lastNode.next = node;
  }

  getSize() {
    let node = this.head;
    let count = 0;
    if (node === null) {
      return count;
    }
    while (node.next !== null) {
      count += 1;
      node = node.next;
    }
    return count + 1;
  }

  getAt(number) {
    if (!Number.isInteger(number)) {
      throw new Error("not a number");
    }
    if (number < 0) {
      throw new Error("index out of bound");
    }
    let count = number;
    let node = this.head;
    while (count > 0) {
      if (node === null || node.next === null) {
        throw new Error("index out of bound");
      }
      node = node.next;
      count -= 1;
    }
    return node;
  }

  insertAt(number, node) {
    this.checkNode(node);
    const nodeAtIndex = this.getAt(number);
    const nodeToBeInserted = node;
    if (nodeAtIndex === null) {
      this.head = nodeToBeInserted;
    } else {
      nodeToBeInserted.next = nodeAtIndex.next;
      nodeAtIndex.next = nodeToBeInserted;
    }
  }
}

class Node {
  constructor(data, nextNode) {
    this.data = data;
    this.next = this.checkNodeClass(nextNode);
  }
  checkNodeClass(nextNode) {
    if (nextNode instanceof Node) {
      return nextNode;
    } else if (!nextNode) {
      return null;
    } else {
      throw new Error("not a node");
    }
  }
}

module.exports = { Node, LinkedList };

const nodeA = new Node("Apple");
const nodeB = new Node("Banana", nodeA);
