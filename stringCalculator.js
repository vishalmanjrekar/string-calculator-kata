function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray
    .filter((num) => num <= 1000)
    .reduce((sum, num) => sum + num, 0);
}

module.exports = add;
