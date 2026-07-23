// try {
//     // E executada quando nao ha erros
//     // console.log(a)
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro')
//     console.log('fechei o arquivo')

//     try {
//         console.log(b)
//     } catch(error) {
//         console.log('Deu erro')
//     } finally {
//         console.log('Tambem osu FINALLY')
//     }
// } catch (error) {
//     // E executada quando ha erros'
//     console.log('tratando o erro')
// } finally {
//     // sempre
//     console.log('FINALLY: eu sempre sou executado')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}


try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora)
} catch(error) {
    //Tratar erro
    // console.log(error)
} finally {
    console.log('Tenha um bom dia.')
}


