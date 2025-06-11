function sumAndProduct(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let product = arr.reduce((acc, num) => acc * num, 1);
    return { sum, product };
}

console.log(sumAndProduct([1, 2, 3, 4, 5]));