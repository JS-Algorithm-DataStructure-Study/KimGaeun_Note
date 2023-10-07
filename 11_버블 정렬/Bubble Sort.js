// 🔆 Bubble Sort (버블 정렬)
/*
- 별로 효율적이지 않고, 흔히 사용되지도 않음
- 오름차순 정렬을 한다면 더 큰 숫자가 한 번에 하나씩 뒤로 이동

- 루프를 돌면서 각 항목을 다음 항목과 비교
- 항목이 비교대상보다 더 큰지 확인하고, 더 크면 교환(swap)함

- 반복을 거듭함에 따라 정렬해야 하는 항목의 수 감소
- 정렬되지 않은 5개의 항목에서 반복을 한 번 하면 정렬되지 않은 항목이 4개가 되고, 반복을 한 번 더 하면 정렬되지 않은 항목이 3개가 되고...

- 시간복잡도 -> (O(n^2))
    - Best (데이터가 거의 정렬됐거나 모두 정렬된 상태) -> O(n) (최적화된 코드일 경우)
    
*/

// 🔆 Swap funcion
// ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// 🔆 Pseudocode
/*
- Start looping from with a variable called i the end of the array towards the beginning.
- Start an inner loop with a variable called j from the beginning until i - 1.
- If arr[j] is greater than arr[j+1], swap those two values.
- Return the sorted array.
*/

// 최적화되지 않은 코드
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
// 매번 배열의 끝까지 비교, 교환을 함
// 배열의 범위를 넘어서서 비교를 하게 됨 (맨 마지막 항목과 undefined를 비교)

// 최적화된 코드 1
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// i가 감소하면 j도 감소 -> 루프가 실행될 때마다 더 적은 횟수로 실행하게 됨
// 길이가 5인 배열의 경우 -> 4번의 비교, 3번의 비교, 2번의 비교, 1번의 비교

// 최적화된 코드 2
function bubbkleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}
// 최적화된 코드 1과 다른 점 -> swap 함수 사용, 교환 방식이 ES2015 방식

// 정렬이 모두 끝난 이후에도 쓸데없이 반복문을 돌게 됨
// 거의 정렬이 되어있는 배열의 경우 비효율적
// 루프를 돌 때 어떤 항목도 교환되지 않았다면 정렬이 완료된 것

// 더 최적화된 코드
function bubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break; // 더 이상 교환하지 않으면 루프에서 빠져나옴
  }
  return arr;
}
