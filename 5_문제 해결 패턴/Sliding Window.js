// 🪷 Sliding Window Pattern (기준점 간 이동 배열 패턴)
/*
- 배열이나 문자열과 같은 일련의 데이터에서 연속적인 데이터의 집합을 찾는 경우에 유용함
- 창문을 만듦. 창문은 단일변수, 배열, 또는 문자열이 될 수 있음
- 조건에 따라 창문을 이동시키며, 시작 위치에서 시작하면 보통 왼쪽에서 오른쪽으로 이동 (시작위치는 다를 수 있음)
*/

// ----------------------------------------------

// 🪷 Challenge
/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
(정렬된 배열일 필요 x)
*/

// 🪷 Naive Solution
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity; // 배열이 모두 음수로 구성되어있을 경우를 고려

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }

  return max;
}
// 시간복잡도 -> O(n^2)

// 🪷 Refactored Solution
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (num > arr.length) return null;

  // O(n)
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // O(n)
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
// 시간복잡도 -> O(n)
