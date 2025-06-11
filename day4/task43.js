function unzip(arr) {
    return arr[0].map((_, i) => arr.map(row => row[i]));
}

console.log(unzip([['a', 1, true], ['b', 2, false]])); 
// Output: [["a","b"],[1,2],[true,false]]

console.log(unzip([['a', 1, true], ['b', 2]])); 
// Output: [["a","b"],[1,2],[true]]
