const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue, continua para a proxima iteracao
// break sai do laco

let i = 0 
do {
    numero = numeros[i];

    if (numero === 2) {
    i++;    
        continue;
    }

    if (numero === 7 ) {
        i++;
        break;
    }
    i++;
    console.log(numero);
} while (i < numeros.length);