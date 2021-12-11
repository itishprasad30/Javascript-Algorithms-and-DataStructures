console.log("Palindrom Cheacker");
// 1st ways
const palindrom_Check = (str) => {
  newStr = str.toLowerCase();
  let j = newStr.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = newStr[i];
    // console.log(x)
    let y = newStr[j - i];
    // console.log(y)
    if (x != y) {
      return false;
    }
  }
  return true;
};

console.log(palindrom_Check("kotok"));

// 2nd way

const reverse = (str) => {
  let rev_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev_str += str[i];
  }
  return rev_str;
};

const is_palindrom = (str) => {
  let reverseStr = reverse(str);
  if (reverseStr === str) {
    console.log("passing string is palindrom");
  } else {
    console.log("Passing sting is not palindrom");
  }
};

console.log(is_palindrom("kotok"));
