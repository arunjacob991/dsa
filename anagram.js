console.log("anagram");

function isAnagram(str1, str2) {
  // str1 = str1.toLowerCase()
  // str2 = str2.toLowerCase()

  if (str1.length !== str2.length) {
    return false;
  }

  let counter = {};

  for (let i of str1) {
    counter[i] = (counter[i] || 0) + 1;
  }

  for (let j of str2) {
    if (!counter[j]) {
      return false;
    }
    counter[j] -= 1;
  }
  return true;
}

console.log(isAnagram("listen", "silenta"));
