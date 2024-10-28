function checkNumberFibo(number) {
  const fiboList = fiboGenerator(number);

  if (fiboList.includes(number)) return `${number} pertence à sequência`;
  return `${number} não pertence à sequência`;
}
function fiboGenerator(n, sequence = [0, 1]) {
  if (n <= 1) return sequence.slice(0, n);

  if (sequence.length >= n) return sequence;

  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return fiboGenerator(n, sequence);
}

const checkResult = checkNumberFibo(13);
console.log(checkResult);
