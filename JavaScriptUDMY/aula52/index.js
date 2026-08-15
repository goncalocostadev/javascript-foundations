function returnFunction(nome) {
    // const nome = 'Goncalo';
    return function() {
        return nome;
    };
}

const funcao = returnFunction('Goncalo');
const funcao2 = returnFunction('Joao');
console.log(funcao)
console.log(funcao2)

console.log(funcao(), funcao2())