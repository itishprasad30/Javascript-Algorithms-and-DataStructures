const time = "12:10AM";
function convertTo24HrsFormat(time) {
  return Date(time);
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
