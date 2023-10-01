// 🪷 Multiple Pointer Pattern (다중 포인터 패턴)
/*
- 인덱스나 위치에 해당하는 포인터 값을 만든 다음, 특정 조건에 따라 중간 지점, 시작 지점, 끝 지점에서 이동시킴 (이동 방향은 항상 다를 수 있음)
- 배열이나 문자열과 같은 선형 구조나 연결 리스트에서 사용
- 배열이나 문자열의 특장 위치를 가리키는 포인터 2개 사용
*/

// ----------------------------------------------

// 🪷 Challenge
/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist.
(배열이 정렬되어 있음!)
*/

// 🪷 Naive Solution
function sumZero(arr) {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}
// 시간복잡도 -> O(n^2)
// 공간복잡도 -> O(1)

// 🪷 Refactored Solution
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  // O(n)
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}
// 시간복잡도 -> O(n)
// 공간복잡도 -> O(1)
// 두 개의 포인터 사용. 왼쪽 끝과 오른쪽 끝에서 가운데로 이동하는 방식

// ----------------------------------------------

// 🪷 Challenge - Count Unique Values
/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

// 🪷 Solution ⭐️
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  // O(n)
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// 시간복잡도 -> O(n)
// 2개의 포인터 사용
