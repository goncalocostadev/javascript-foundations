function maiorOuIgual(num1, num2) {
    if (typeof num1 != typeof num2) {
        return false 
    } else if (num1 >= num2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(0, 2))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))
