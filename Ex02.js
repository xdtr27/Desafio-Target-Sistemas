///Fibonacci

let fib = [];
const x = 4;

function fibo(x) {
  if (x < 2) {
    return x;
  } else {
    return fibo(x - 1) + fibo(x - 2);
  }
}

for (i = 0; i <= x; i++) {
  fib.push(fibo(i));
}

console.log(fib);
fib.map((element) => {
  if (element === x) {
    console.log("o número informado está presente na sequência");
  }
});
