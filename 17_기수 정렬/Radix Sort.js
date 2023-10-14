// 🧊 Radix Sort (기수 정렬)
/*
- Comparison Sorts Average Time Complexity
    - Bubble Sort -> O(n^2)
    - Insertion Sort -> O(n^2)
    - Selection Sort -> O(n^2)
    - Quick Sort -> O(nlogn)
    - Merge Sort -> O(nlogn)

- 위의 것들보다 더 빠르게 정렬할 수 있지만, 비교를 통한 정렬은 아님
- radix sort는 요소끼리의 비교가 아닌 다른 방식으로 정렬을 수행함
- 숫자 크기에 대한 정보를 자릿수로 인코딩한다는 사실을 이용 (네 자리 수는 두 자리 수보다 큼)
- 이론적으로 radix sort는 다른 비교 정렬보다 빠를 수 있지만, 컴퓨터 메모리에 수를 저장하는 방식에 대한 제한으로 인해 실제로는 비교 정렬과 크게 다르지 않을 수 있다는 주장도 있음

- 시간복잡도
    - Best -> O(nk)
    - Average -> O(nk)
    - Worst -> O(nk) 

    - n -> 정렬할 항목 수 (length of array)
    - k -> 수의 길이 (자릿수, the number of digits)

- 공간복잡도 -> O(n + k)    
*/

// 🧊 Get Digit Pseudocode -> returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// 🧊 Digit Count Pseudocode -> returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// 🧊 Most Digits Pseudocode -> Given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// 🧊 Radix Sort Pseudocode
/*
- Define a function that accepts list of numbers.
- Figure out how many digits the largest number has.
- Loop from k = 0 up to this largest number of digits.
- For each iteration of the loop:
    - Create buckets for each digit (0 to 9).
    - Place each number in the corresponding bucket based on its kth digit.
- Replace our existing array with values in our buckets, starting with 0 and going up to 9.
- Return list at the end!
*/

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}
