var areOccurrencesEqual = function (s) {
  const sortArr = s.split("").sort();

  let h = [];
  let t = [];

  for (let i = 0; i < sortArr.length + 1; i++) {
    if (t.length === 0 || t[0] === sortArr[i]) {
      t.push(sortArr[i]);
    } else {
      h.push(t);
      t = [];
      t.push(sortArr[i]);
    }
  }

  return h.every((val) => val.length === h[0].length);
};

console.log(areOccurrencesEqual("aabbcc"));
