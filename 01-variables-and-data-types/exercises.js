// Primitive Values are copied

let var1 = 50;
let var2 = var1;

var1 = 32;

console.log(var1);
console.log(var2);

// In this example the var1 was given a value 50
// then var2 copied the value from var1 initially, and then
// var1 value was changed to 32 so the output will be
// 32, 50


// Shared Object
let object1 = {
    name: "Goncalo",
}

let object2 = object1

object1.name = "Joao";

console.log(object1.name)
console.log(object2.name)

/** Here the Object2 gets referenced to Object1
 * and then the object1 property name is changed so
 * the Object2 is now getting the name from the Object1
 */


// Reassigning
let object3 = {
    name: "Goncalo",
}

let object4 = object3

object4 = {
    name: "Joao",
}

console.log(object3.name)
console.log(object4.name)

/** The Output will be name: Joao, because first object3 was given a property,
 * then object4 shares the object3 property but then object4 was given another object
 * so object3 now is not sharing the Object3 and has its own object
 */