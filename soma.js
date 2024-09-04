function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let x = 0;

    while (x < INDICE) {
        x = x + 1;
        SOMA = SOMA + x;
    }

    console.log(SOMA); // O valor de SOMA será 91
}

calcularSoma();