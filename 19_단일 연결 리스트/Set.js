// 🌰 Set Pseudocode
/*
- This function should accept an index and a value.
- Use your get function to find the specific node.
- If the node is not found, return false.
- If the node is found, set the value of that node to be the value passed to the function and return true.
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }
}
