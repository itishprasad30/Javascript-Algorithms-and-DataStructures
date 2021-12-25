// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1

// Input: s = "leetcode";
// Output: 0;

// Input: s = "loveleetcode";
// Output: 2;

// Input: s = "aabb";
// Output: -1;

//  this function return the index of first non-repeating
// character if found, or else it returns -1

var firstUniqChar = function (s) {
  // arr to store first index
  let fi = new Array(256);
  fi.fill(-1);
  //initalizing all element to -1
  for (let i = 0; i < 256; i++) {
    fi[i] = -1;
  }

  // sets all repeating characters to -2 and non-repeating characters
  // contain the index where they occur
  for (let i = 0; i < s.length; i++) {
    if (fi[s.charCodeAt(i)] == -1) {
      fi[s.charCodeAt(i)] = i;
    } else {
      fi[s.charCodeAt(i)] = -2;
    }
  }

  var res = Infinity;

  for (var i = 0; i < 256; i++) {
    if (fi[i] >= 0) res = Math.min(res, fi[i]);
  }

  if (res == Infinity) return -1;
  else return res;
};

console.log(firstUniqChar("aabb"));
