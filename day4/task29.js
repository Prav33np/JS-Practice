function numStringRange(start, end, step) {
    let result = [];
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
        result.push(String.fromCharCode(i));
    }
    return result;
}

console.log(numStringRange('a', 'z', 2)); 
// Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
