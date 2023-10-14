// 🍡 Quick Sort (퀵 정렬)
/*
- merge sort와 비슷하게, 배열에 0개 또는 1개가 남을 때까지 데이터를 분할하는 방식
- pivot(피벗 포인트)라고 부르는 단일 요소를 선택하여 수행함
- 한 요소를 선택하고, 그 요소보다 작은 숫자는 왼쪽으로 옮기고 큰 숫자는 오른쪽으로 옮김 
    - 선택된 요소는 올바른 위치에 있게 됨
    - 선택된 요소의 왼쪽과 오른쪽 내에서 순서는 정렬되어있지 않음
- 위의 과정을 왼쪽과 오른쪽에 반복함

- 시간복잡도
  - Best -> O(nlogn)
  - Average -> O(nlogn) 
  - Worst -> O(n^2) 

  - Best, Average
    - merge sort처럼, n이 늘어나면 밑이 2인 logn의 분할 발생함 (O(logn) decompositions)
    - 각 분할하는 단계마다 O(n)번의 비교 발생 (pivot을 찾을 때 다른 모든 요소와 한 번 비교함) (O(n) comparisons per decomposition)
  - Worst
    - 데이터가 이미 정렬된 경우 -> pivot을 고를 때 매번 가장 작은 요소만 선택하거나 가장 큰 요소만 선택할 때
    - O(n) decompositions
    - O(n) comparisons per decomposition
    - 이미 정렬된 데이터를 다루고 있을 경우, 첫 번째 항목이 아닌 무작위 항목이나 중간 항목을 pivot으로 선택하여 문제를 해결할 수 있음

- 공간복잡도 -> O(logn)
*/

// 🎐 Pivot Pseudocode
/*
- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively).
- Grab the pivot from the start of the array. (피벗 선택 위치는 중간, 마지막, 무작위 위치도 될 수 있음)
- Store the current pivot index in a variable (this will keep track of where the pivot should end up).
- Loop through the array from the start until the end.
    - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
- Swap the starting element (i.e. the pivot) with the pivot index.
- Return the pivot index.
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start; // pivot을 가장 마지막에 어디로 옮길지 추적함

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

// 🎐 Quick Sort Pseudocode
/*
- Call the pivot helper on the array.
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
- Your base case occurs when you consider a subarray with less than 2 elements.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // 2개 이상의 요소를 살펴보고 있을 때
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1); // left
    quickSort(arr, pivotIdx + 1, right); // right
  }
  return arr;
}
// 새로운 배열을 만들지 않음. 기존 배열 내에서 정렬됨
