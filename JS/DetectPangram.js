// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  let list = new Array(26).fill(0); //initialize array
  string = string.split(" ").join(""); // gets rid of spaces 71
  for (let i = 0; i < string.length; i++) {
    list[string[i].toLowerCase().charCodeAt(0) - 97]++;
  }
  return list;
  //return string.split("").findIndex(num => num == 0) == -1 ? true : false;
}
console.log(isPangram())
var string = "The quick brown fox jumps over the lazy dog.";
Test.assertEquals(isPangram(string), true);
var string = "This is not a pangram.";
Test.assertEquals(isPangram(string), false);
