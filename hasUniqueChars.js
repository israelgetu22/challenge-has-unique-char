function hasUniqueChars(n) {
  // let firstLetter = n
  // let lastLetter = n
  // let statement = false
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      // console.log(`${n[i]}, ${n[j]}`)
      if (n[i] === n[j]) return false;
    }
  }
  return true;
}

let myWord = hasUniqueChars("random");
console.log(myWord);

// // Write your code below

// function hasUniqueCharacters(word) {
//   let noDuplicate = true;
//   for (let i = 0; i < word.length; i++) {
//     for (let x = i + 1; x < word.length; x++) {
//       if (word[i] === word[x]) {
//         noDuplicate = false;
//       }
//     }
//   }
//   return noDuplicate;
// }

// let myWord = hasUniqueCharacters("ondy");
// console.log(myWord);
