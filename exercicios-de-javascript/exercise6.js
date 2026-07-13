function inverso (valor) {
    const typeOf = typeof valor 

    if (typeof valor === "boolean" && valor === true) {
        return !true
    } else if (typeof valor === "boolean" && valor === false) {
        return !false
    }
    if (typeof valor === "number") {
        return -valor
    } else {
        return `boolean or numbers expected, mas o parametro e do tipo ${typeOf}`
    }
    
}

console.log(inverso("2"))