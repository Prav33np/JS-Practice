function last(array, n) {
    if (array == null) return undefined;
    if (n == null) return array[array.length - 1];
    return array.slice(-n);
}

console.log(last([7, 9, 0, -2]))
console.log(last([7, 9, 0, -2], 3)) 
console.log(last([7, 9, 0, -2], 6)) 
