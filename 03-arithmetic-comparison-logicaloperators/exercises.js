console.log(5 > 5)
// false because 5 is equal to 5
console.log(5 < 3)
// false because 5 is greater than 3
console.log(5 >= 6)
// false because 5 is neither greater than or equal to 6
console.log(7 <= 6)
// false because 7 is neither lesser than or equal to 6
console.log("123" === 123)
// false because one is a string and another is a number so they are not strictly equal
console.log(false !== "123")
// true because they are strictly different types, one is a boolean another is a string 
console.log(5 * 5)
// 25
console.log(5 ** 5)
// 5 ** 5 means 5x5x5x5x5 that = 3125
console.log(12 % 3)
// the remainder is 0
console.log(7 + 5)
// 12
console.log(10 - 5)
// 5
console.log(6 / 3)
// 2
console.log(5 % 2)
// 1
console.log(5 > 2 || 3 === 3)
// first is true second is also true so expression is true
console.log(5 > 3 || 4 < 2 && "3" === 3)
// 4 < 2 is false and "3" is not strictly equal to 3 because different data types
// so both are false  which leads the && expression to be false, and then 5 > 3 is true
// so its true || false which leads to true because in || (OR) if only one expression is true
// the entire expression is true 
console.log (!(9 > 3 || 4 < 2 && false === "false"))
// 4 < 2 is false, &&, false is not strictly equal to "false" so both are false.
// 9 > 3 is true so its true || false that is true because or|| only needs one expression to be true
// but because of the !not operator it converts the expression to false, which does the reverse of the operation result
