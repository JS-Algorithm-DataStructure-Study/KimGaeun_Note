// 🔅 Selection Sort (선택 정렬)
/*
- 버블 정렬과 유사하지만, 큰 값을 정렬시키는 대신 작은 값을 정렬시킴
- 버블 정렬은 값을 swap해가며 가장 큰 값을 가장 마지막으로 밀어내지만, 선택 정렬은 최솟값을 찾아 마지막에 바꾸어 맨 앞에 둠
- 반복하면서 비교하는 범위가 줄어듦
*/

// 🔅 Pseudocode
/*
- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.
*/

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let lowest = i; // 값이 아니라 인덱스를 저장

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
  }
  return arr;
}
