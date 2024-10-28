function checkString(phrase) {
  let count = 0;

  phrase = phrase.split("");
  phrase.forEach((letter) => {
    if (letter === "a" || letter === "A") {
      count++;
    }
  });

  return `A exibição da letra a ocorre ${count} vezes no texto informado`;
}

const checkResult = checkString("It's a lot of fun to code in JavaScript")
console.log(checkResult);
