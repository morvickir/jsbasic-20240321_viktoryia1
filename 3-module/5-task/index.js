function getMinMax(str) {
  let numbers = str.split(' ')
                    .filter(item => !isNaN(parseFloat(item)))
                    .map(Number);
  if (numbers.length === 0) {
    return {};
  }
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return { min, max };
}

