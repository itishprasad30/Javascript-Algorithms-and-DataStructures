function sumAll(arr) {
  let [min, max] = [...arr].sort((a, b) => a - b);
  console.log("Min", min);
  console.log("Max", max);
  let sumInitial = 0;
  for (let i = min; i <= max; i++) {
    sumInitial += i;
  }
  return sumInitial;
}

console.log(sumAll([100, 1])); // 5050

// Find the different from two array

const differArr = (arr1, arr2) => {
  let newArr = [];

  let onlyFirst = (first, second) => {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  };

  onlyFirst(arr1, arr2);
  onlyFirst(arr2, arr1);

  return newArr;
};

console.log(differArr([1, 2, 3], [2, 3, 4, 5])); // [1,4,5]
