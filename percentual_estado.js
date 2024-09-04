function calcularPercentualFaturamento(estados) {
    const total = Object.values(estados).reduce((acc, valor) => acc + valor, 0);

    for (let estado in estados) {
        const percentual = (estados[estado] / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}

const faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

calcularPercentualFaturamento(faturamentoMensal);
