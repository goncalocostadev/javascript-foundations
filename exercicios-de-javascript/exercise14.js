function objetoParaArray(obj) {
   const chaves = Object.keys(obj)
   const resultado = chaves.map(chave => [chave, obj[chave]])

   return resultado
}

console.log(objetoParaArray({nome: 123, profissao: "123"}))