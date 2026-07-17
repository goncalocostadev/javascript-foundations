/*
Primitivos (imutaveis) - string, number, boolean, undefined, 
null (bigint, symbol) - valor

Referencia (mutavel) - Arrays, Objects, Functions
*/


const a = {
    nome: 'Goncalo',
    sobrenome: 'Costa'
};
const b = {...a};

a.nome = 'Joao';
console.log(a);
console.log(b);



// let a = [1, 2, 3,]
// let b = [...a];
// let c = b;
// console.log(a, b)

// a.push(4)
// console.log(a, b);

// b.pop();
// console.log(a, b)

// a.push('Goncalo')
// console.log(a, c);


// let a = "A";
// let b = a; // COPIA
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b)
// //          0123456
// let nome = "Goncalo"
// nome[0] = "R"
// console.log(nome[0], nome);
