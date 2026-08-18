// IIFE -> Immediately invoked function expression 
(function(age, weight, height) {
    const sobrenome = "Costa"
    function createName(nome){
        return `${nome} ${sobrenome}`;
    }

    function sayName() {
        console.log(createName('Goncalo'))
    }
    sayName()
    console.log(age, weight, height)
    
})(30, 80, 1.80);

(function () {

})();

const nome = "oncalo";
