// 🪷 Helper Method Recursion (헬퍼 메서드 재귀)
/*
- Recursion.js 안의 재귀함수들은 모두 single standalone function
- 이 경우 스스로 재귀. 함수 외부에서 함수를 호출하면, 함수는 직접 자체 코드 내의 함수를 호출함

- Helper Method Recursion에는 두 개의 함수가 있음
- 외부 함수가 있고, 그 안에 재귀 함수가 있음 (재귀적이지 않은 외부 함수가 재귀적인 내부 함수를 호출하는 패턴)
- 외부 함수는 우리가 외부에서 호출함
- 외부함수를 호출에서 데이터를 내부로 전달할 수 있음
- 배열이나 데이터 목록 등을 컴파일해야할 때 사용

- Helper Method Recursion 없이 Pure Recursion을 사용하는 경우
  - 배열의 복사본을 만들 수 있는 slice, spread operator, concat 등을 사용하여 배열을 변경하지 않을 수 있음
  - 문자열을 변경할 수 없기 때문에 (immutable), slice, substr, substring등을 사용하여 문자열 복사본을 만들 수 있음
  - 객체의 복사본을 만들기 위해 Object.assign, spread operator를 사용할 수 있음
*/

// ----------------------------------------------

// 🪷 Helper Method Recursion 1
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);
  return outerScopedVariable;
}

// ----------------------------------------------

// 🪷 Helper Method Recursion 2
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return; // base case
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]); // 홀수이면 result에 push
    helper(helperInput.slice(1)); // 첫 번째 요소를 제외한 배열을 넣어서 재귀함수 호출
  }

  helper(arr);
  return result;
}
// 배열에서 모든 홀수값을 수집하는 것과 같은 작업의 경우 Helper Method Recursion을 사용하는 것이 좋음
// result를 재귀함수 내부에서 선언한다면, 재귀함수가 호출될 때마다 result가 초기화됨

// Helper Method Recursion을 쓰지 않은 Pure Recursion
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}
// 외부 데이터 구조 사용 x
/*
collectOddValues([1,2,3,4,5])

[1].concat(collectOddValues([2,3,4,5]))
  [].concat(collectOddValues([3,4,5]))
    [3].concat(collectOddValues([4,5]))
      [].concat(collectOddValues([5]))
        [5].concat(collectOddValues([]))
          [] -> 마지막으로 반환하는 값
        [5]
      [5]
    [3,5]
  [3,5]
[1,3,5] -> 최종반환값
*/
