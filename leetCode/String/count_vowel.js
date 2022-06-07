function getCountVowel(str) {
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const stringArr = str.toLowerCase().split("");

  for (let i = 0; i < stringArr.length; i++) {
    if (vowels.includes(stringArr[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}
console.log(getCountVowel("itishprasadsahoo"));
