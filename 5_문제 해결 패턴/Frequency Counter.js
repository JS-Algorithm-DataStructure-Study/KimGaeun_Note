// 🪷 Frequency Counter Pattern (빈도수 세기 패턴)
/*
- 보통 자바스크립트의 객체를 사용해서 배열, 문자열의 다양한 값과 빈도 수집
- 중첩 루프 혹은 O(n^2) 시간복잡도를 피할 수 있음
*/

// ----------------------------------------------

// 🪷 Challenge
/* 
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.
*/

// 🪷 Naive Solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // O(n)
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // O(n)
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// 시간복잡도 -> O(n^2)

// 🪷 Refactored Solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // O(n)
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // O(n)
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // O(n)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}
// 시간복잡도 -> O(n)
// 두 개의 루프가 중첩 루프보다 나음

// ----------------------------------------------

// 🪷 Challenge - Anagrams
/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

// 🪷 Solution
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    // if letter exists, increment, otherwise set to 1
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }

  return true;
}
