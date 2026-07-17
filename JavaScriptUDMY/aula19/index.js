const pessoa1 = {
    nome: 'Goncalo',
    sobrenome: 'Costa',
    idade: 22,

    fala() {
        console.log(`a minha idade atual e ${this.idade}`);
    },

    
    incrementAge() {
        ++this.idade
    }
}

pessoa1.fala();
pessoa1.incrementAge();
pessoa1.fala()
pessoa1.incrementAge();
pessoa1.fala()
pessoa1.incrementAge();
pessoa1.fala()



// function criaPessoa(nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Goncalo', 'Costa', 22)
// const pessoa2 = criaPessoa('Maria', 'Miranda', 25)
// const pessoa3 = criaPessoa('Joao', 'Oliveira', 26)
// const pessoa4 = criaPessoa('Junior', 'Lara', 32)
// const pessoa5 = criaPessoa('Antonio', 'Costa', 55)

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa3.nome)



// const pessoa1 = {
//     nome: 'Goncalo',
//     sobrenome: 'Costa',
//     idade: 22
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 25
// };

// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome)



// const nome01 = 'Goncalo'
// const sobrenome01 = 'Costa';
// const idade01 = 22;

// const nome02 = 'Maria'
// const sobrenome02 = 'Oliveira';
// const idade01 = 25;

// const array = [1,2,3];
// array.push(4);
// array[0] = 'Luiz'
// array = 'Outra' // nao pode reatribuir valor a constante sem mudar pra let
// console.log(array)