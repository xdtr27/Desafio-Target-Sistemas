const estados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let total = 0;

for (let faturamento in estados) {
  total += estados[faturamento];
}
for (let estado in estados) {
  const percentual = ((estados[estado] / total) * 100).toFixed(2);
  console.log(`${estado}: ${percentual}%`);
}
