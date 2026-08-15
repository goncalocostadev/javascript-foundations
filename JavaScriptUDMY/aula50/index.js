function createMultiplier(multiplier) {
    // multiplier
    function multiplicacao(n){
        return n * multiplier;
    };
    return multiplicacao;
}

const duplica = createMultiplier(2);
const triplica = createMultiplier(3);
const quadriplica = createMultiplier(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));