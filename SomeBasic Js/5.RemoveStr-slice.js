const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  const word = str.split("");
  const newWord = word.slice(0, wordLimit);
  return newWord.join("");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
