function array_filled(n, val) {
    return Array(n).fill(val);
}

console.log(array_filled(6, 0)); 
// Output: [0, 0, 0, 0, 0, 0]

console.log(array_filled(4, 11)); 
// Output: [11, 11, 11, 11]
