
function isSubsequence(a, b) {
  let i = 0;
  let j = 0;
  console.log(a.length);
  for (j = 0; j < b.length; j++) {
    if (b[j] === a[i]) {
      i++;
    }
    if (i === a.length) {
        return true;
    }
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))