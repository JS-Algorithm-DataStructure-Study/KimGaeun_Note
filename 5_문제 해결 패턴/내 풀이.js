// Anagrams Solution
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Obj = {};
  const str2Obj = {};

  for (let elem of str1) {
    if (str1Obj[elem]) str1Obj[elem]++;
    else str1Obj[elem] = 1;
  }

  for (let elem of str2) {
    if (str2Obj[elem]) str2Obj[elem]++;
    else str2Obj[elem] = 1;
  }

  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) return false;
  }

  return true;
}

// Count Unique Values Solution
function countUniqueValues1(arr) {
  if (!arr.length) return 0;

  let num = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) num++;
  }
  return num + 1;
}

function countUniqueValues2(arr) {
  if (!arr.length) return 0;

  let p1 = 0;
  let p2 = 1;

  while (p2 <= arr.length - 1) {
    if (arr[p1] !== arr[p2]) {
      p1++;
      arr[p1] = arr[2];
    }
    p2++;
  }

  return p1 + 1;
}
