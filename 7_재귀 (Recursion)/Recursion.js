// 🪷 Recursion (재귀)
/*
- 자기 자신을 호출하는 함수
- 한 가지 문제를 가지고, 어떤 종료점에 도달할 때까지 더 작은 부분이나 변경되는 부분에서 반복적으로 수행하는 것
- 그 종료점을 종료 조건(base case)라고 함
- 반복 대신 재귀를 사용하는 것이 더 깔끔할 때가 있음

- 재귀 예시 
    - JSON.parse / JSON.stringify
    - document.getElementById / DOM traversal algorithms (DOM은 모든 요소가 중첩된 트리 구조로 이루어짐)
    - Object traversal

- 재귀함수가 갖춰야 하는 2가지 조건
    - Base case -> 종료 조건. 재귀가 중단되는 시점이 있어야 함
    - Different Input -> 매번 다른 데이터로 함수를 호출해야 함

- 재귀를 사용할 때 흔히 발생할 수 있는 문제들
    - 종료 조건이 없거나 잘못되는 경우
    - 잘못된 값을 반환하거나, 반환을 잊는 경우
    - Stack overflow -> Maximum call stack size exceeded 에러 발생. 재귀가 멈추지 않을 때 발생

 */

// ----------------------------------------------

// 🪷 Recursive Function 1
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

// 재귀를 사용하지 않은 함수
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

// ----------------------------------------------

// 🪷 Recursive Function 2
function sumRange(num) {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1);
}

/*
sumRange(3)
 return 3 + sumRange(2)
   return 2 + sumRange(1)
     return 1
    --- 값들이 거꾸로 합산됨 ---
   return 2 + 1
 return 3 + 3
return 6
*/

/*
- call stack에 함수들이 아래와 같이 순차적으로 쌓임

--------
⬇️
sumRange
--------
⬇️
sumRange
sumRange
--------
⬇️
sumRange
sumRange
sumRange
--------

- 그리고 가장 위의 함수부터 순차적으로 실행되며 call stack에서 제거됨

sumRange -> return 1
sumRange
sumRange
--------
⬇️
sumRange -> return 2 + 1
sumRange
--------
⬇️
sumRange -> return 3 + 3
--------
⬇️
--------
*/

// ----------------------------------------------

// 🪷 Recursive Function 3 - Factorial
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
// factorial(5) -> call stack에 factorial 함수가 순차적으로 5개 쌓였다가 순차적으로 제거됨

// 재귀를 사용하지 않은 함수
function factorial(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}
