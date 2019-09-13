function sameFrequency(a, b) {
  const frequency = {};
  var digits = ("" + a).split("");
  var digits2 = ("" + b).split("");

  for (i = 0; i < digits.length; i++) {
    frequency[digits[i]] ? (frequency[digits[i]] += 1) : (frequency[digits[i]] = 1);
  }


  for (i = 0; i < digits2.length; i++) {
    if (!frequency[digits2[i]]) {
      return false;
    } else {
      frequency[digits2[i]] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
