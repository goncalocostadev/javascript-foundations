const h2 = document.querySelector('.h2')
const Data = new Date()

h2.innerHTML = new Intl.DateTimeFormat('pt-PT', {
    dateStyle: 'full',
    timeStyle: 'short',
}).format(Data)



// const Data = new Date()
// const dataToText = formatDate(Data)

// function setData() {
//     createP(dataToText)
// }
// setData()

// function createP(text) {
//     const h1 = document.querySelector('.div')
//     const p = document.createElement('p')
//     p.innerHTML = text;
//     h1.appendChild(p)
// }

// function zeroLeft(num) {
//     return num >= 10 ? num : `0${num}`
// }

// function formatDate(data) {
//     const hours = zeroLeft(data.getHours());
//     const minutes = zeroLeft(data.getMinutes()); 
//     const day = data.getDate();
//     const dayName = data.getDay();
//     const month = data.getMonth();
//     const year =  data.getFullYear();
//     const dayNames = ['Domingo', 'Segunda-Feira', 'Terca-Feira', 'Quarta-Feira',
//         'Quinta-Feira', 'Sexta-Feira', 'Sabado']
//     const monthNames = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio',
//         'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'] 

//     return `${dayNames[dayName]}, ${day} de ${monthNames[month]} de ${year} ${hours}:${minutes}`
// }
