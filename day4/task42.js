function difference(arr1, arr2) {
    const flatArr1 = arr1.flat(Infinity);
    const flatArr2 = arr2.flat(Infinity);

    return [...new Set([...flatArr1, ...flatArr2])].map(String);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
// Output: ["1", "2", "3", "10", "100"]

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
// Output: ["1", "2", "3", "4", "5", "6"]
