// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Input: (s = "anagram"), (t = "nagaram");
// Output: true;

// Input: (s = "rat"), (t = "car");
// Output: false;

var isAnagram = (s, t) => {
  let str1 = s.split("");
  let str2 = t.split("");
  let n1 = str1.length;
  let n2 = str2.length;

  // If length of both strings is not same,
  // then they cannot be anagram
  if (n1 != n2) return false;

  // Sort both strings
  str1.sort();

  str2.sort();

  // Compare sorted strings
  for (let i = 0; i < n1; i++) if (str1[i] != str2[i]) return false;

  return true;
};

console.log(isAnagram("anagram", "naagram"));
