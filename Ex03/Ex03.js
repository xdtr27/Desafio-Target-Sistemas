
let average = 0;
let daysWithoutBilling = 0;

function faturamento() {
  fetch("./dados.json")
    .then((response) => response.json())
    .then((list) => {
      const sum = list.reduce((acc, value) => acc + value.valor, 0);
      average = Number((sum / (list.length - daysWithoutBilling)).toFixed(2));
      return list;
    })
    .then((lista) => {
      let bigNumber = lista[0].valor;
      let smallNumber = lista[0].valor;
      let daysMoreProfitable = 0;

      lista.forEach((day) => {
        if (day.valor > average) {
          daysMoreProfitable += 1;
        }

        if (day.valor > bigNumber) {
          bigNumber = day.valor;
        }

        smallNumber = Math.min(day.valor)
      });

      const request = {
        diasMaiorFaturamento: daysMoreProfitable,
        menorNumero: smallNumber,
        maiorNumero: Number(bigNumber.toFixed(2)),
      };

      console.log(request)
    });
}

faturamento()