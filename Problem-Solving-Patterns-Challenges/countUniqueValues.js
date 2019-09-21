function countUniqueValues(arr){
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (j = 1; j < arr.length; j++) {

        if (arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
  }

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))