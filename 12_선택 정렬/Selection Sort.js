// 🔅 Selection Sort (선택 정렬)
/*
- 버블 정렬과 유사하지만, 큰 값을 정렬시키는 대신 작은 값을 정렬시킴
- 버블 정렬은 값을 swap해가며 가장 큰 값을 가장 마지막으로 밀어내지만, 선택 정렬은 최솟값을 찾아 마지막에 바꾸어 맨 앞에 둠
- 반복하면서 비교하는 범위가 줄어듦
- 엄청 효율적이지는 않음
- 배열이 이미 거의 다 정렬되어있는 상태라고 해도 더 유리하지 않음
- 선택 정렬이 버블 정렬보다 나을 때 -> swap 수를 최소화하고싶은 경우 (이외에는 선택정렬이 더 유리하지는 않음)
- 시간복잡도 -> O(n^2)
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
  for (let i = 0; i < arr.length; i++) {
    let lowest = i; // 값이 아니라 인덱스를 저장

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

// swap을 별도 함수로 만든 코드
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}
