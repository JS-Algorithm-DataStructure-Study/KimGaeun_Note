// 🌰 Popping Pseudocode
/*
- If there are no nodes in the list, return undefined.
- Loop through the list until you reach the tail.
- Set the next property of the 2nd to last node to be null.
- Set the tail to be the 2nd to last node.
- Decrement the length of the list by 1.
- Return the value of the node removed.
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    // 리스트를 따라가는 방법 (사용하지 않는 메서드)
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return undefined; // 리스트가 비어있을 때

    let current = this.head;
    let newTail = current; // previous 역할

    while (current.next) {
      newTail = current;
      current = current.next;
      // newTail은 current가 이전에 가리키던 것으로 설정되고, current는 앞으로 한 단계 나아감
    }

    this.tail = newTail; // 마지막에서 두 번째 노드
    this.tail.next = null; // 마지막 노드에 대한 연결을 끊음
    this.length--;

    if (this.length === 0) {
      // 하나 남은 노드가 pop되어서 리스트가 비어있을 때
      this.head = null;
      this.tail = null;
    }

    return current; // 제거된 마지막 노드
  }
}
