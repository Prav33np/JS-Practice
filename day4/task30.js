function mergeArray(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

console.log(mergeArray(array1, array2)); 
// Output: [1, 2, 3, 30]
