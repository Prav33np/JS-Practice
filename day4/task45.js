function uniqueValues(arr) {
    return [...new Set(arr)];
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]

console.log(uniqueValues([1, 2, 3, 4, 5])); 
// Output: [1, 2, 3, 4, 5]

console.log(uniqueValues([1, -2, -2, 3, 4, -5, -6, -5])); 
// Output: [1, -2, 3, 4, -5, -6]
