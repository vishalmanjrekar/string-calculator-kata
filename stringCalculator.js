function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // Extract the delimiter
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map(Number);
  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
