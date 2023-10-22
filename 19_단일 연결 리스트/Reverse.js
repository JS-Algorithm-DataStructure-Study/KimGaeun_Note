// 🌰 Reverse Pseudocode ⭐️
/*
- Swap the head and tail.
- Create a variable called next.
- Create a variable called prev.
- Create a variable called node and initialize it to the head property.
- Loop through the list.
- Set next to be the next property on whatever node is.
- Set the next property on the node to be whatever prev is.
- Set prev to be the value of the node variable. 
- Set the node variable to be the value of the next variable.
- Once you have finished looping, return the list.
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null; // tail의 next가 null이기 때문에

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}
