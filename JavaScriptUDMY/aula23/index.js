/* 
    OPERADORES LOGICOS
        &&  ->  AND   -> TODAS AS EXPRESSOES PRECISAM SER VERDADEIRAS PRA SER TRUE
        ||  ->  OU    -> APENAS UMA EXPRESSAO PRECISA SER VERDADEIRA
        !   ->  NOT     
*/

// const expressaoAND = true && true && true && true
// const expressaoOR = false || false || true || false;

const usuario = 'Goncalo'; // form user digitou
const senha = '123456' // form user digitou

//                      True                    False
const vaiLogar = usuario === 'Goncalo' && senha === '12345';
console.log(vaiLogar)