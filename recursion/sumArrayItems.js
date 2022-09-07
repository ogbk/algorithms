// Simple function
const sum1 = (list) => {
  if (list.length === 0) { return 0 };

  return (list.shift() + sum1(list));
};

// Longer function
const sum2 = (list) => {
  const rec = (remainder, result) => {
    if (remainder.length === 0) { return result };

    const firstElem = remainder.shift();
    return rec(remainder, firstElem + result);
  }

  return rec(list, 0);
};

// Using ARRAY.reduce()
const sum3 = (list) => list.reduce(
  (a,b) => a+b,
  0
);

module.exports = {sum1, sum2, sum3}