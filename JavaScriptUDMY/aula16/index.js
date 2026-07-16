const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('is-integer');
const notANumber = document.getElementById('not-a-number');
const roundBaixo = document.getElementById('round-baixo');
const roundCima = document.getElementById('round-cima');
const duasCasasDecimais = document.getElementById('duas-casas-decimais');

const numero = Number(prompt("Digite o seu numero!"))
numeroTitulo.innerHTML = numero;

raiz.innerHTML =  `<p>Raiz quadrada e ${numero ** (1/2)}</p>`
inteiro.innerHTML = `<p>${numero} is integer? ${Number.isInteger(numero)}</p>`
notANumber.innerHTML = `<p>${numero} is NaN? ${Number.isNaN(numero)}</p>`
roundBaixo.innerHTML = `<p>${numero} Arredondando pra baixo ${Math.floor(numero)}</p>`
roundCima.innerHTML = `<p>Arredondando pra cima ${Math.ceil(numero)}</p>`
duasCasasDecimais.innerHTML = `<p>${numero} Com duas casas decimais ${numero.toFixed(2)}</p>`

// document.body.innerHTML += `<h1>Raiz quadrada e ${numero ** (1/2)}</h1>`
// document.body.innerHTML += `<h1>${numero} is integer? ${Number.isInteger(numero)}</h1>`
// document.body.innerHTML += `<h1>${numero} is NaN? ${Number.isNaN(numero)}</h1>`
// document.body.innerHTML += `<h1>${numero} Arredondando pra cima ${Math.floor(numero)}</h1>`
// document.body.innerHTML += `<h1>${numero} Arredondando pra baixo ${Math.ceil(numero)}</h1>`
// document.body.innerHTML += `<h1>${numero} Com duas casas decimais </h1>`