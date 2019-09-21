function averagePair(a, b) {
  if (a.length === 0) {
    return false;
  }

  let i = 0;
  let j = a.length-1;

  for (i = 0; i !== j; i++) {
    let isAverage = (a[i] + a[j]) / 2;
    if (isAverage > b) {
      console.log(a[i]);
      console.log(a[j]);
      console.log(isAverage);
      j--;
      i--;
    }
    if (isAverage < b) {
      continue;

    } if (isAverage === b) {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 4.1));
console.log(averagePair([], 4));
