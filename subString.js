console.log("subString");

function isSubstring(string, sub) {
  if (sub.length > string.lenght) return false;

  for (let i = 0; i < string.length - sub.length + 1; i++) {
    if (string[i] !== sub[0]) continue;
    let exists = true;
    for (let j = 1; j < sub.length && exists; j++) {
      if (string[i + j] === sub[j]) continue;
      exists = false;
    }
    if (exists) return true;
  }
  return false;
}

console.log(isSubstring("yoyo Hello ello", "Hello"));
