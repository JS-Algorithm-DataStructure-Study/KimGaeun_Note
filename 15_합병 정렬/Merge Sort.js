// 🎐 Merge Sort (합병 정렬)
/*
- spliting(분할), sorting(정렬), merging(합병) 세 가지 조합으로 이뤄짐
- 0개의 요소 혹은 1개의 요소로 이루어진 배열은 이미 정렬되어있다는 점을 이용
- 배열을 0개 혹은 1개의 요소로 이루어진 배열로 분할하고, 정렬된 배열로 다시 병합시킴
- 분할 정복(divide and conquer) 알고리즘 

- 시간복잡도
    - Best -> O(nlogn)
    - Average -> O(nlogn)
    - Worst -> O(nlogn)
- O(logn) decompositions, O(n) comparisons per decomposition
- 데이터의 특이한 점을 이용하는게 아니라면, 정렬 알고리즘의 최선은 O(nlogn)

- 공간복잡도 -> O(n)
*/

// 🎐 Merging Arrays Pseudocode
/*
- Create an empty array, take a look at the smallest values in each input array.
- While there are still values we haven't looked at...
    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
    - Once we exhaust one array, push in all remaining values from the other array.
*/

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (i < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}
// 배열이 같은 방식으로 정렬되어 있다고 가정하고, 정렬된 배열 두 개의 조합을 반환
// 시간복잡도 -> O(n + m)
// 공간복잡도 -> O(n + m)

// 🎐 Merge Sort Pseudocode
/*
- Break up the array into halves until you have arrays that are empty or have one element.
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
- Once the array has been merged back together, return the merged (and sorted!) array.
*/

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (i < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
