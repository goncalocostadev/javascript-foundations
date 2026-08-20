// function createCalc() {
//     return {
//         display: document.querySelector('.display'),
//         btnClear: document.querySelector('.btn-clear'),

//         inicia() {
//             this.clickButtons();
//             this.keyEnter();
//         },

//         keyEnter() {
//             this.display.addEventListener('keyup', e => {
//                 if (e.key === 'Enter') {
//                     this.doCount();
//                 }
//             })
//         },

//         clearDisplay() {
//             this.display.value = '';
//         },

//         deleteBtn() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         doCount() {
//             let conta = this.display.value

//             try {
//                 conta = eval(conta);

//                 if(!conta) {
//                     alert('Conta invalida!')
//                     return;
//                 }

//                 this.display.value = conta;
//             } catch(e) {
//                 alert('Conta invalida!')
//                 return;
//             }
//         },


//         clickButtons() {
//             // this -> calculadora
//             document.addEventListener('click', (e) => {
//                 const el = e.target;

//                 if(el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if(el.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 }

//                 if(el.classList.contains('btn-del')) {
//                     this.deleteBtn();
//                 }

//                 if (el.classList.contains('btn-eq')) {
//                     this.doCount();
//                 }
//             });
//         },

//         btnParaDisplay(value) {
//             this.display.value += value
//         }
//     };
// }

// const calculadora = createCalc();
// calculadora.inicia();

function Calculadora() {
    this.display = document.querySelector('.display')


    this.inicia = () => {
        this.clickButtons();
        this.keyEnter();
    }

    this.keyEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                this.doCount();
            }
        })
    };

    this.clearDisplay = () => this.display.value = '';

    this.deleteBtn = () => this.display.value = this.display.value.slice(0, -1);
    

    this.doCount = () => {

        try {

            const conta = eval(this.display.value)

            if (!conta) {
                alert('Conta invalida!')
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta invalida!')
            return;
        }
    }

    this.clickButtons = () => {
        document.addEventListener('click', (e) => {
            const el = e.target

            if (el.classList.contains('btn-num')) {
                this.addNumDisplay(el.innerText)
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.deleteBtn();
            }

            if (el.classList.contains('btn-eq')) {
                this.doCount();
            }

            })
    }

    this.addNumDisplay = (value) => {
        this.display.value += value
        this.display.focus()
    }
    
}

const calculadora = new Calculadora()
calculadora.inicia()