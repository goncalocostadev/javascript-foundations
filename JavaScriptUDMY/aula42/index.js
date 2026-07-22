// Escreva uma funcao que recebe um numero e 
// retorne o seguinte:
// Numero e divisivel por 3 = Fizz
// Numero e divisivel por 5 = Buzz
// Numero e divisivel por 3 e 5 = FizzBuzz
// Numero nao e divisivel por 3 e 5 = Retorna proprio numero
// Checkar se o numero e realmente um numero
// use a funcao com numeor de 0 a 100



const fizzBuzz = (num) => {
    if (!(typeof num === "number" && num >= 0 && num <= 100)) {
        return 'Error (Invalid number)'
    }

    if (num % 3 === 0 && num % 5 === 0) {
        return `${num}:FizzBuzz`
    } else if (num % 5 === 0) {
        return `${num}:Buzz`
    } else if (num % 3 === 0) {
        return `${num}:Fizz`
    } else {
        return `${num}`
    }

}

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i))
}