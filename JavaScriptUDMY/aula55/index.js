// Factory function
// Constructor function
function createPerson(nome, sobrenome, height, weight) {
    return {
        nome, 
        sobrenome,

        // Getter
        get fullName() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set fullName(value) {
            value = value.split(' ');
            this.nome = value.shift();
            this.sobrenome = value.join(' ')
            console.log(value);
        },

        speak(context = 'speaking about JS') {
            return `${this.nome} is ${context}.`
        },

        height,
        weight,
        // Getter
        get imc() {
            const indice = this.weight / (this.height ** 2);
            return indice.toFixed(2)
        }
    };
}
const p1 = createPerson('Goncalo', 'Costa', 1.80, 80);
p1.fullName = "Maria Oliveria Silva";
console.log(p1.sobrenome)
console.log(p1.speak())

