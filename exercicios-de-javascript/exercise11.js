function receiveFirstAndLastElement(arr = []) {
    let newArr = [arr[0], arr[arr.length - 1]]

    return newArr;
}

console.log(receiveFirstAndLastElement([1,2,3]))