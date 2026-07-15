/*
Luiz Otavio miranda tem 30 anos, pesa 84 kg 
 tem 1.8 de altura e IMC e de 25
Luiz Otavio nasceu em 1980
*/

const nome = 'Luiz Otavio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const altura = 1.80
let imc = peso / (altura * altura)
const anoAtual = 2026
let anoNascimento = anoAtual - idade  

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg 
tem ${altura} de altura e IMC e de ${imc}
Luiz Otavio nasceu em ${anoNascimento}`)