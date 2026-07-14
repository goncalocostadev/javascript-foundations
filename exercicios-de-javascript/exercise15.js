function receberParesDeIndicesPares(arr) {
    let resultado = []
     
    for (let i = 0; i < arr.length; i++) {
        const numeroEIndicePar = i % 2 === 0 && arr[i] % 2 === 0

        if (numeroEIndicePar) {
            resultado.push(arr[i])
        }
    }
    return resultado
}

console.log(receberParesDeIndicesPares([10,70,22,43]))