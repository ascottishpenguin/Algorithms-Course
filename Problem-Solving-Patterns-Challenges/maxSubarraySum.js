function maxSubArray(array, length) {
    let tempMax = 0;
    let compareMax = 0;
    let currentMax = 0;
    if (length > array.length) {
        return null
    }
    for (i = 0; i < array.length; i++) {
        if (i < length) {
            compareMax += array[i];
            currentMax = compareMax;
        }
        if (i >= length) {
            tempMax = compareMax
            tempMax -= array[i - length]
            tempMax += array[i]
        }

        if (tempMax > currentMax) {
            currentMax = tempMax;
        }

        if (i >= length) {
        compareMax = tempMax;
        }
    }
    return currentMax
}

console.log(maxSubArray([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))
console.log(maxSubArray([2, 3], 3))