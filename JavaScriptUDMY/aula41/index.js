// Escreve uma funcao chamada ePaisagem que 
// recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem. (paisagem - modo horizontal)
//           (retrato - modo vertical)


const ePaisagem = (largura, altura) => largura >= altura
console.log(ePaisagem(1920, 1080))


