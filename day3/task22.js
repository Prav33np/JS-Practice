function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item)).concat(arr2.filter(item => !arr1.includes(item)));
}

console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // ["6"]
