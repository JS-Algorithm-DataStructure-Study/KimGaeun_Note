// 🎐 Insertion Sort (삽입 정렬)
/*
-  배열의 절반을 점차적으로 만들어 정렬하며, 절반은 항상 정렬되어 있음
- 각 요소를 정렬되어 있는 절반 속 해당되는 위치에 삽입함
- 정렬된 부분을 유지하고 적절한 위치에 항목을 삽입하기 때문에 라이브 스트리밍 방식으로 들어온 데이터를 즉시 입력해야 하는 상황에 편리
- 시간복잡도 
    - Best -> O(n)
    - Worst -> O(n^2)
*/

// 🎐 Pseudocode
/*
- Start by picking the second element in the array.
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 0이 아니라 1부터 시작
    let currentVal = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    // 마지막 반복 이후 변수 j의 값은 마지막 반복문에서의 j보다 1 작아짐
    arr[j + 1] = currentVal;
  }
  return arr;
}
