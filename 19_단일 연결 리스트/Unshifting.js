// 🌰 Unshifting Pseudocode
/*
- This function should accept a value.  
- Create a new node using the value passed to the function.
- If there is no head property on the list, set the head and tail to be the newly created node.
- Otherwise set the newly created node's next property to be the current head property on the list.
- Set the head property on the list to be that newly created node.
- Increment the length of the list by 1.
- Return the linked list.
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}
