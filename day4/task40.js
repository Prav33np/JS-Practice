function array_range(start, length) {
    return Array.from({ length }, (_, i) => start + i);
}

console.log(array_range(1, 4)); 
// Output: [1, 2, 3, 4]

console.log(array_range(-6, 4)); 
// Output: [-6, -5, -4, -3]
