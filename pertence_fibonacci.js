function pertenceFibonacci(n) {
    let a = 0;
    let b = 1;

    if (n === 0 || n === 1) {
        console.log(`${n} pertence à sequência de Fibonacci.`);
        return;
    }

    let fibonacci = a + b;

    while (fibonacci <= n) {
        if (fibonacci === n) {
            console.log(`${n} pertence à sequência de Fibonacci.`);
            return;
        }
        a = b;
        b = fibonacci;
        fibonacci = a + b;
    }

    console.log(`${n} não pertence à sequência de Fibonacci.`);
}

pertenceFibonacci(21);