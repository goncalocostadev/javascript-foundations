// Escreve uma fucao que recebe 2 numeros e retorne o maior deles 

function biggerNumber(a, b) {
    // if (a > b) {
        //     return a;
        // } 
        // return b;
        return a > b ? a : b    
        // return Math.max(a, b)
}

const max2 = (x, y) => x > y ? x : y

console.log(biggerNumber(503, 4569))