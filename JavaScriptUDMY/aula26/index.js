const form = document.querySelector('.form')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputPeso = event.target.querySelector('.peso')
    const inputAltura = event.target.querySelector('.altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    console.log(peso, altura)


    if (!peso) {
        setResultado("Peso Invalido!", false)
        return;
    }

    if (!altura) {
        setResultado("Altura invalida!", false)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `seu IMC e ${imc} (${nivelImc})`

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3' ]

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5)  return nivel[0]
 
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p')
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''

    const p = criaP()

    if (isValid) {
        p.classList.add('resultado-style')
    } else {
        p.classList.add('resultado-style-invalid')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)   
}

