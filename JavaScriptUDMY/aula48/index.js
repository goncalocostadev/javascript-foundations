// Declaracao de funcao (function hosting)
sayHi();


function sayHi() {
    console.log('Hi');
}

// First-class objects
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();


// Arrow
const functionArrow = () => {
    console.log('Arrow function')
};
functionArrow();

// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('estou falando')
    }
};
obj.falar();