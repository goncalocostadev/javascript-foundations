function removerPropriedade(objeto, parametro) {
    
    let objectCopy = {...objeto} 
    delete objectCopy[parametro]

    return objectCopy
}

let object = {
    id: 20,
    nome: "caneta",
    descricao: "Nao preenchido"
}

console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Nao preenchido"
}, "descricao"))


