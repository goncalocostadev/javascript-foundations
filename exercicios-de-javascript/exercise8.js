function multiplicar(numero1, numero2) {
    let resultado = 0;

    
    // vai adicionar o numero1 a quantidade de vezes que a quantidade do numero2 for, se numero 2 for "3" vai adicionar numero 1 ao resultado 3 vezes
    // o for loop vai rodar o valor de numero2 e a cada volta vai adicionar o numero1 ao resultado, por isso se o numero2 for 4 e o numero1 for 5
    // vai dar loop 4 vezes o numero 5 que vai ser 5+5+5+5
    for (let i = 0; i < numero2; i++) {
        resultado += numero1
    }

    return resultado
}


console.log(multiplicar(5, 10))
