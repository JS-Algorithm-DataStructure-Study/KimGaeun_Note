// 🪷 Divide and Conquer Pattern (분할과 정복 패턴)
/*
- 배열이나 문자열같은 큰 규모의 데이터셋 처리. 연결 리스트나 트리가 될 수도 있음
- 데이터셋을 작은 조각으로 나누고, 데이터의 서브셋에 작업을 반복함 (큰 데이터셋을 작은 하위셋으로 분할하고, 다른 부분은 무시)
- 쪼개진 요소들을 다시 병합하는 과정이 필요한 경우도 있음
- 시간복잡도를 줄여줌
- 이진 탐색 알고리즘 등
*/

// ----------------------------------------------

// 🪷 Challenge
/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
If the value is not found, return -1.
(정렬된 배열이어야 함)
*/

// 🪷 Naive Solution
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}
// 시간복잡도 -> O(n)
// Linear search (선형 탐색) 방식

// 🪷 Refactored Solution
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < val) min = middle + 1;
    else if (arr[middle] > val) max = middle - 1;
    else return middle;
  }

  return -1;
}
// 시간복잡도 -> O(log n)
// Binary serach (이진 탐색) 방식
