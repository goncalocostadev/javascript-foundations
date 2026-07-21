// For in -> le os indices ou keys do objeto
//                 0       1      2
const pessoa = {
    nome: 'Goncalo',
    sobrenome: 'Costa',
    idade: 22
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

// Formas de acessar keys dentro do objeto
// const chave = 'nome'
// console.log(pessoa.nome);
// console.log(pessoa['nome']);


// for (let i in frutas) {
//     console.log(frutas[i]);
// }


// for (let i =0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }