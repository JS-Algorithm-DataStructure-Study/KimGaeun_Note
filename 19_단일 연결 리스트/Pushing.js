// 🌰 Pushing pseudocode
/*
- This function should accept a value.
- Create a new node using the value passed to the function.
- If there is no head property on the list, set the head and tail to be the newly created node.
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
- Increment the length by one.
- Return the linked list.
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      // 리스트가 비어있을 때
      this.head = newNode;
      this.tail = this.head;
      // head와 tail이 같은 노드를 가리키고 있음
    } else {
      // 리스트가 비어있지 않을 때
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
console.log(list);
// SinglyLinkedList { head: null, tail: null, length: 0 }

list.push("HELLO");
console.log(list);
/*
  SinglyLinkedList {
    head: Node { val: 'HELLO', next: null },
    tail: Node { val: 'HELLO', next: null },
    length: 1
  }
  */

list.push("GOODBYE");
console.log(list);
/*
  SinglyLinkedList {
    head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: null } },
    tail: Node { val: 'GOODBYE', next: null },
    length: 2
  }
  */

console.log(list.head.next);
// Node { val: 'GOODBYE', next: null }
