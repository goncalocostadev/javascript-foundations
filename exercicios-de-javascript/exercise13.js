function filtrarNumeros(arr) {
    let array = []

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number")
            array.push(arr[i])
    }
    return array;
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))