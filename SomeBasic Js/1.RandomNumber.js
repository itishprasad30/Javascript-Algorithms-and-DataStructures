function randomNumberGenerateInRandge(start, end) {
  return Math.random() * (end - start) + start;
}

const result = randomNumberGenerateInRandge(1, 10); // between {1,9}

console.log(Math.floor(result)); // floor method should retrun only int value
