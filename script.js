class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    let node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    } else {
      node.next = null;
      let last = this.head;

      while (last.next != null) {
        last = last.next;
      }
      last.next = node;
    }
    this.length++;
  }

  prepend(value) {
    let node = new ListNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    if (!this.head) return;
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (index > this.size) return;
    let current = this.head;
    let counter = 1;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  pop() {
    if (!this.head) return;
    if (!this.head.next) this.head = null;
    let previous = this.head;
    let current = this.head.next;
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    this.length--;
    previous.next = null;
  }

  contains(value) {
    if (!this.head) return;
    let current = this.head;
    // let exists = false;
    while (current.value !== value) {
      if (current.next == null) return false;
      current = current.next;
    }
    return true;
  }

  find(value) {
    if (!this.head) return;
    let current = this.head;
    let index = 1;
    while (current.value !== value) {
      if (current.next == null) return null;
      current = current.next;
      index++;
    }
    return index;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current !== null) {
      string += current.value + "->";
      current = current.next;
    }
    string += "NULL";
    return string;
  }

  //Extra Credit//
  insertAt(value, index) {
    if (index < 0 || index > this.length) return;
    let node = new ListNode(value);
    let current = this.head;
    let previous = null;
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      current = this.head;
      let counter = 0;
      while (counter < index - 1) {
        counter++;
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    this.length++;
  }

  removeAt(index) {
    if (index < 1 || index > this.length) return;
    let current = this.head;
    let previous = current;
    let counter = 1;
    if (index === 1) {
      this.head = current.next;
      this.length--;
      return current;
    } else {
      while (counter < index) {
        if (current.next == null) return null;
        previous = current;
        current = current.next;
        counter++;
      }
      previous.next = current.next;
      this.length--;
      return current;
    }
  }
}

let list = new LinkedList();

list.append(3);
list.append(4);
list.append(5);
list.prepend(2);
list.prepend(1);

console.log("Length -", list.size());
console.log(list.toString());
