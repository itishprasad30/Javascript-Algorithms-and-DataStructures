var isPalindrome = function (str) {
  let l = 0;
  let h = str.length - 1;

  // Lowercase string
  str = str.toLowerCase();

  // Compares character until they are equal
  while (l <= h) {
    let getAtl = str[l];
    let getAth = str[h];

    // If there is another symbol in left
    // of sentence
    if (!(getAtl >= "a" && getAtl <= "z")) l++;
    // If there is another symbol in right
    // of sentence
    else if (!(getAth >= "a" && getAth <= "z")) h--;
    // If characters are equal
    else if (getAtl == getAth) {
      l++;
      h--;
    }

    // If characters are not equal then
    // sentence is not palindrome
    else return false;
  }

  // Returns true if sentence is palindrome
  return true;
};

console.log(isPalindrome("Too hot to hoot."));

// another way only word
const palindrome_word = (str) => {
  let newStr = str.toLowerCase();
  let j = newStr.length - 1;

  for (let i = 0; i < j / 2; i++) {
    let x = newStr[i];
    let y = newStr[j - i];

    if (x != y) return false;
  }

  return true;
};
console.log(palindrome_word("kotok"));

// another another ways

const reverseStr = (str) => {
  let revStr = str.split();
  return revStr;
};

const palindrome_new = (str) => {
  let reverse = reverseStr(str);
  if (reverse === str) return true;
  return false;
};

console.log(palindrome_new("kotak"));
