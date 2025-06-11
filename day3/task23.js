function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(union([1, 2, 3], [100, 2, 1, 10])); 