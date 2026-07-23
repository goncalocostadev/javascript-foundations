function soma (a, b) {
   if (typeof a !== "number" || typeof b !== "number")  {
    throw new ReferenceError ('a and b need to be numbers');
   } 
   return a + b
}

try {
    console.log(soma('1', 2))
} catch(error) {
    // console.log(error);
    console.log('Alguma coisa mais amigavel pro usuario')
}