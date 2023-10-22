// 🌰 Remove Pseudocode
/*
- If the index is less than zero or greater than the length, return undefined.
- If the index is the same as the length-1, pop.
- If the index is 0, shift.
- Otherwise, using the get method, access the node at the index - 1.
- Set the next property on that node to be the next of the next node.
- Decrement the length.
- Return the value of the node removed.
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;

    return removed;
  }
}
