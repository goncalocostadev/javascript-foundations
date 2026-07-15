function checkAnoBissexto(ano) {

    const multiplo4 = ano % 4 === 0
    const multiplo100 = ano % 100 === 0
    const multiplo400 = ano % 400 === 0

    if (multiplo4 && !multiplo100 || multiplo400) {
        return true
    } else {
        return false
    }
}

console.log(checkAnoBissexto(2020))