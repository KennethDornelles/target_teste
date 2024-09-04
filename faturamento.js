const faturamentoDiario = [0, 1000, 2500, 3000, 0, 5000, 0, 8000, 2000, 1000, 0, 0];

function calcularEstatisticasFaturamento(faturamento) {
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    for (let valor of faturamento) {
        if (valor > 0) {
            if (valor < menorValor) menorValor = valor;
            if (valor > maiorValor) maiorValor = valor;
            somaFaturamento += valor;
            diasComFaturamento++;
        }
    }

    const mediaMensal = somaFaturamento / diasComFaturamento;
    const diasAcimaDaMedia = faturamento.filter(valor => valor > mediaMensal).length;

    console.log(`Menor valor: R$ ${menorValor}`);
    console.log(`Maior valor: R$ ${maiorValor}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

calcularEstatisticasFaturamento(faturamentoDiario);
