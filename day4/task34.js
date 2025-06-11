function nthLargest(arr, n) {
    return arr.sort((a, b) => b - a)[n - 1];
}

console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); 
// Output: 89
