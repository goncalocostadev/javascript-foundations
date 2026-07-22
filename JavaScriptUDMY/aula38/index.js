const numRandom = (min, max) => {
    const numb = Math.random() * (max - min) + min;
    return Math.floor(numb);
}

const min = 1
const max = 50
let rand = numRandom(min, max);

while (rand !== 10) {
    rand = numRandom(min, max)
    console.log(rand)
}

console.log("########")

do {
    rand = numRandom(min, max)
    console.log(rand)
} while (rand !== 10);