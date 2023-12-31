// power
/*
문제: 
밑과 지수를 받아들이는 power라는 함수를 작성합니다. 
이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다. 
이 함수는 Math.pow()의 기능을 모방해야 합니다. 
음의 밑과 지수에 대해서는 신경쓰지 마세요.
*/

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// factorial
/*
문제:
숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.
팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.
예를 들어, 4 팩토리얼 (4!)은 4 * 3 * 2 * 1 = 2입니다. 
팩토리얼 0(0!)은 항상 1입니다.
*/

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// productOfArray
/*
문제:
숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.
*/

function productOfArray(arr) {
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

// recursiveRange
/*
문제:
숫자를 받아 1부터 해당 숫자까지의 합을 반환하는 recursiveRange라는 함수를 작성하시오.
*/

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

// fib
/*
문제:
숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하시오. 
피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며, 모든 수는 이전 두 수의 합과 같다는 것을 명심하세요.
*/

function fib(num) {
  if (num === 1) return 1;
  if (num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
