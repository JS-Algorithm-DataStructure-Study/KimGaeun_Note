// 🦐 Doubly Linked Lists (이중 연결 리스트)
/*
- Singly Linked List와 달리, 앞으로 가는 포인터뿐 아니라 뒤로 가는 포인터도 있음
- Singly Linked List보다 더 많은 메모리를 사용함 (More memory === More flexibility)
*/

// 🦐 Doubly Linked List Pseudocode
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null; // Singly Linked List와 다른 부분
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
