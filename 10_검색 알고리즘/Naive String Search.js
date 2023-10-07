// 🦕 Naive String Search (나이브 문자열 검색)
/*
- 문자열에서 특정 문자열이 몇 번 등장하는지 알고싶을 때
- Ex) "wowomgzomg"에 "omg"가 몇 번 등장하는지
*/

// 🦕 Pseudocode
/*
- Loop over the longer string.
- Loop over the shorter string.
- If the characters don't match, break out of the inner loop.
- If the characters do match, keep going.
- If you complete the inner loop and find a match, increment the count of matches.
- Return the count.
*/

function niveSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; i++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
}
