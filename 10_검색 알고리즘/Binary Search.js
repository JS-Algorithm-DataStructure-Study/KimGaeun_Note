// 🦕 Binary Search (이진 검색)
/*
- Linear Search보다 빠름
- 확인을 한 번 할 때마다, 하나의 요소가 아닌 남은 요소의 절반을 제거할 수 있음
- 정렬된 데이터에서만 사용 가능

- 중간 데이터를 선택하고, 찾고자 하는 값이 그 데이터의 왼쪽에 있는지 오른쪽에 있는지 확인함
- 찾고자 하는 값이 왼쪽에 있다면 왼쪽의 데이터를 대상으로 다시 중간 데이터를 선택함 (오른쪽일 경우도 동일)
- 원하는 값을 찾을 때까지 위의 과정을 반복함

- 기본적인 개념은 Divide and Conquer(분할정보)임
- 배열을 두 부분으로 나누고, 중간점을 선택하고, 찾는 값이 중간점을 기준으로 좌측 절반과 우측 절반 중 어느 쪽에 있을지 확인

- 시간복잡도
    - Worst & Average -> O(log n)
    - Best -> O(1)
*/

// 🦕  Pseudocode ⭐️
/*
- This function accepts a sorted array and a value.
- Create a left pointer at the start of the array, and a right pointer at the end of the array.
- While the left pointer comes before the right pointer:
    - Create a pointer in the middle.
    - If you find the value you want, return the index.
    - If the value is too small, move the left pointer up.
    - If the value is too large, move the right pointer down.
- If you never find the value, return -1.
*/

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2); // Math.ceil()도 상관없음

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    // end = middle, start = middle이 아니라는 점에 유의

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}
