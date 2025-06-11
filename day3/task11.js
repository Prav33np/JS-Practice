function sumOfSquares(array) {
    return array.reduce((sum, num) => sum + Math.pow(num, 2), 0);
}

console.log(sumOfSquares([0, 1, 2, 3, 4]));