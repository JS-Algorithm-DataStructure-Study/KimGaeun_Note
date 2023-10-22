// 🌰 Insert Pseudocode
/*
- If the index is less than zero or greater than the length, return false.
- If the index is the same as the length, push a new node to the end of the list.
- If the index is 0, unshift a new node to the start of the list.
- Otherwise, using the get method, access the node at the index - 1.
- Set the next property on that node to be the new node.
- Set the next property on the new node to be the previous next.
- Increment the length.
- Return true.
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    // 부정연산자인 !는 boolean 값을 반환하는데, 이 부정연산자를 두 개 사용함으로써 원래 값을 boolean으로 변환한 값을 얻게 됨

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next; // 이 정보를 저장해놓지 않으면, prev.next를 newNode로 설정하면서 원래 prev.next 노드에 대한 정보가 사라져버림

    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }
}
