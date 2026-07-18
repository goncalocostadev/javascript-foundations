function zeroLeft (n) {
    return n >= 10 ? n : `0${n}`;
}


const formataData = (data) => {
    const dia = zeroLeft(data.getDate());
    const mes = zeroLeft(data.getMonth() + 1);
    const ano = zeroLeft(data.getFullYear());
    const hora = zeroLeft(data.getHours());
    const min = zeroLeft(data.getMinutes());
    const seg = zeroLeft(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)


// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + umDia); // 01/01/1970 Timestamp unix ou epoca unix
// console.log(data.toString())

// const data = new Date(2019, 3); // a, m, d, h, M, s, ms
// const data = new Date(1784382108504)
// console.log('Dia', data.getDate())
// console.log('Mes', data.getMonth() + 1) // Mes comeca do zero
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Min', data.getMinutes())
// console.log('Seg', data.getSeconds())
// console.log('ms', data.getMilliseconds())
// console.log('Dia semana', data.getDay()) // 0 - Domingo, 6 - Sabado
// console.log(data.toString());
// // console.log(Date.now());