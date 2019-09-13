function areThereDuplicates() {
  const isItAduplicate = {};

  for (elements in arguments) {
    let element = arguments[elements]
    if (!isItAduplicate[element]) {
      isItAduplicate[element] = 1;
    } else {
      return true;
    }
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));


function areThereDuplicates2(){
    return new Set(arguments).size !== arguments.length;
}