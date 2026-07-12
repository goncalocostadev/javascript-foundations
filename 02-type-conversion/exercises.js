console.log(Number("25"))
// this converts string 25 into number
console.log(Number(""))
// this converts empty string into 0
console.log(Number("hello"))
// this converts string into 1, because 1 is the value
// of something that is true?
// i then run the code and it says NaN so i guess i was wrong
// it makes sense beacuse a string with context cant be a number

console.log(String(true))
// this converts boolean true into a string "true"
console.log(String(123))
// this converts the number 123 into the string "123"

console.log(Boolean(""))
// converts to false because empty strin is falsy
console.log(Boolean(" "))
// converts to true because string has a space as content so its truthy
console.log(Boolean("false"))
// converts to true because string has content in it
console.log(Boolean(0))
// converts into false because 0 is falsy
console.log(Boolean(1))
// converts true because 1 is truthy
console.log(Boolean([]))
// converts true because all objects are truthy and 
// an array is an object
console.log(Boolean({}))
// same thing true because objects are truthy even empty
console.log(Boolean(null))
// is false because null is falsy
console.log(Boolean(undefined))
// is false because null and undefined are == both are falsy