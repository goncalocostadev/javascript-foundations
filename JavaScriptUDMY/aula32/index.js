const pessoa = {
    nome: 'Goncalo',
    sobrenome: 'Costa', 
    idade: 30,
    endereco: {
        rua: 'AV Portugal',
        numero: 320,
    }
};

// Atribuicao via destructuring
const { nome, sobrenome, ...rest } = pessoa;
console.log(nome, sobrenome, rest);