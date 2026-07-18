function getWeekDayText(weekDay) {
    let diaSemanaTexto;

    switch (weekDay) {
        case 0: diaSemanaTexto = 'Domingo'; return diaSemanaTexto;
        case 1: diaSemanaTexto = 'Segunda'; return diaSemanaTexto;
        case 2: diaSemanaTexto = 'Terca'; return diaSemanaTexto;
        case 3: diaSemanaTexto = 'Quarta'; return diaSemanaTexto;
        case 4: diaSemanaTexto = 'Quinta'; return diaSemanaTexto;
        case 5: diaSemanaTexto = 'Sexta'; return diaSemanaTexto;
        case 6: diaSemanaTexto = 'Sabado'; return diaSemanaTexto;
        default: diaSemanaTexto = 'Oi?';
    }

    
}

const data = new Date('1987-04-21 00:00:00');
const weekDay = data.getDay();
const weekDayText = getWeekDayText(weekDay);

console.log(weekDay, weekDayText)