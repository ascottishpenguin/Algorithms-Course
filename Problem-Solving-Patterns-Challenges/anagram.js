function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  let firstArray = first.split("");
  let secondArray = second.split("");
  let valid =  true;

  firstArray.forEach(letter =>
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  );


  secondArray.forEach(letter => {

    if (!lookup[letter]) {
        valid = false
      } else {
        lookup[letter] -= 1;
      }
    }
    )
    if (valid === false) {
        return false;
    }
  return true;
}

//console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "bzz"));
//console.log(validAnagram("anagram", "nagaram"));
//console.log(validAnagram("rat", "nagaram"));
