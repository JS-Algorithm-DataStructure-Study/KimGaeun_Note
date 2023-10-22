// 🌰 Singly Linked Lists (단일 연결 리스트)
/*
- Linked list
    - 데이터를 저장하는 자료 구조
    - 순서에 따라 데이터 저장
    - Array에서는 각 데이터 요소들은 번호에 의해 인덱스가 부여됨
    - Linked List는 다음 데이터 요소를 가리키는 인덱스 없이 다수의 데이터 요소들로 구성됨 (데이터에 접근하기 위해 사용할 인덱스 x)
    - 바로 다섯 번째 데이터에 접근할 수 없고, 첫 번째 요소부터 시작해서 두 번째, 세 번째, 네 번째 요소를 거쳐서 다섯 번째 요소에 도달할 수 있음
    - 각각의 요소를 Node(노드)라고 부름
    - Linked list는 다수의 노드들로 구성되고, 각각의 노드는 하나의 데이터 요소를 저장함
    - 각 노드들은 다음 노드를 가리키는 정보도 저장하며, 다음 노드가 없을 경우 null을 저장
    - Random access는 불가하지만, 데이터 추가와 삭제는 Array보다 편리함

    - head -> linked list의 시작 노드
    - tail -> linked list의 마지막 노드 
    - length

- Singly Linked List
    - 각 노드가 다음 노드로, 단일 방향으로만 연결되어있음

- 시간복잡도
    - Insertion -> O(1)
    - Removal -> O(1) or O(N)
    - Searching -> O(N)
    - Access -> O(N)

- Array vs. Linked List
    - Array에서 인덱스를 관리하는 작업, 삽입 및 삭제 작업은 시간이 소요되지만, 특정 인덱스에 접근하는 것은 빠름
    - 삽입, 삭제 작업을 주로 하거나, 임의 접근 작업이 필요없거나, 주어진 순서대로 데이터를 관리하거나 접근하는 경우에는 Singly Linked List가 적절 
*/

// 🌰 Node Pseudocode
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Node -> 단일 데이터 요소인 value를 저장하고, 이어서 호출될 다음 노드에 대한 참조 정보인 next를 저장

let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

console.log(first);
/*
Node {
  val: 'Hi',
  next: Node { val: 'there', next: Node { val: 'how', next: [Node] } }
}
*/
// 위의 코드는 비효율적이기 때문에, 아래와 같이 작성할 수 있음

// 🌰 Singly Linked List Pseudocode
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

let list = new SinglyLinkedList();
console.log(list);
// SinglyLinkedList { head: null, tail: null, length: 0 }
