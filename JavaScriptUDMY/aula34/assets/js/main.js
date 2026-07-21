const container = document.querySelector('.container')

const elementos = [
    {tag: 'p', texto: 'Frase 1'}, 
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];


// function appendElements() {
//     for (let i = 0; i < elementos.length; i++) {
//         const createElements = document.createElement(elementos[i].tag)
//         createElements.innerHTML = elementos[i].texto
//         container.appendChild(createElements)
//     }
// }
// appendElements()


const div = document.createElement('div');


function appendElements() {
    for (let i = 0; i < elementos.length; i++) {
        let { tag, texto } = elementos[i]
        let createTag = document.createElement(tag);
        let createText = document.createTextNode(texto)
        createTag.appendChild(createText);
        div.appendChild(createTag)
    }
    container.appendChild(div)
}

appendElements()