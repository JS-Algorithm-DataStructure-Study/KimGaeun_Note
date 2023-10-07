// 🦕 Linear Search (선형 검색)
/*
- 모든 개별 항목을 하나씩 확인함 (한 번에 하나의 항목을 확인하는 식으로 모든 항목 확인)
- 해당 값을 찾거나 맨 끝에 도달할 때까지 계속 확인
- 데이터가 정렬되지 않았을 때 사용할 수 있는 최선의 방법

- JS에서 Linear Search를 사용하는 메서드 
    - indexOf
    - includes
    - find
    - findIndex

- 시간복잡도 -> O(n)
    - Best -> O(1) (값을 곧바로 찾는 경우)
    - Average -> O(n) 
    - Worst -> O(n) (값이 가장 마지막에 있거나 없는 경우)
*/

// 🦕  Pseudocode
/*
- This function accepts an array and a value.
- Loop through the array and check if the current array element is equal to the value.
- If it is, return the index at which the element is found.
- If the value is never found, return -1.
*/

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
