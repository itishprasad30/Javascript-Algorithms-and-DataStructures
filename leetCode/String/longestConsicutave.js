const longestConsicutave = (inputArr) => {
  const set = new Set(inputArr);
  let maxLength = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (!set.has(inputArr[i] - 1)) {
      let currentNum = inputArr[i];
      let currentLength = 1;
      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
};

console.log(longestConsicutave([12, 22, 25, 34, 22, 36, 88, 99]));
