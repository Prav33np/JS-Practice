function flatten(arr, shallow = false) {
    return shallow ? arr.flat(1) : arr.flat(Infinity);
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]])); 
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true)); 