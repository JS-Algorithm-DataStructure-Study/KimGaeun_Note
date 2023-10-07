// Linear Search
/*
배열과 값을 받아들이고 그 값이 배열 안에 존재하는 경우 그 인덱스(0, 1, 2, ... 중 몇 번째에 위치하는지)를 반환하는 linearSearch라는 함수를 작성합니다. 
값이 배열 안에 존재하지 않으면 -1을 반환합니다.
이 함수를 구현할 때 indexOf를 사용하지 마세요!
*/

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

// Binary Search
/*
정렬된 배열과 값을 받아들이고 값이 존재하는 경우 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다. 
값이 존재하지 않으면 -1을 반환합니다.
이 알고리즘은 linearSearch 보다 더 효율적일 것입니다. 
구현 방법은 여기에서 확인할 수 있습니다.
1) https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
2) https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search
*/

function binarySearch(arr, num) {
  let lp = 0;
  let rp = arr.length - 1;

  while (lp < rp) {
    const mp = Math.ceil((rp + lp) / 2);
    const middle = arr[mp];

    if (num < middle) rp = mp;
    else if (num > middle) lp = mp;
    else return mp;
  }

  return -1;
}
