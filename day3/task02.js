function array_Clone(input) {
    return input.flat(); // Wee can use slice();
}

console.log(array_Clone([1, 2, 4, 0]));

console.log(array_Clone([1, 2, [4, 0]]));